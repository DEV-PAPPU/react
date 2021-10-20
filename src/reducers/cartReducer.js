import Swal from 'sweetalert2';

const initialData ={
    cart:[]
};

const cartReducer =(state = initialData, {type, payload}) =>{

     switch(type){

        case "ADD_TO_CART" : 
        let shoppig_cart = [];

         //Geting cart item  from localStorage   
        if(localStorage.getItem('cart')){
            shoppig_cart = JSON.parse(localStorage.getItem('cart'));
        }

        let items = shoppig_cart.find(item => item.product_id === payload.product.id);
        
        if (items) {
            items.quantity++
            Swal.fire({
                icon: 'success',
                title: 'Product Added'
            })
        }
        else{
            shoppig_cart.push({
              name : payload.product.title, 
              product_id : payload.product.id, 
              image : payload.product.image,
              price: payload.product.price,
              quantity: 1
           });

           Swal.fire({
            icon: 'success',
            title: 'Product Added'
          })

        }

         //Store products to localStorage
        localStorage.setItem('cart', JSON.stringify(shoppig_cart));
        return state;
        

        //Remove single product from cart
        case "ADD_ITEM_REMOVE" :

        //Geting product from localStorage
        let storageProducts = JSON.parse(localStorage.getItem('cart'));
       
        //filtering product & removed product from localStorage
        let products = storageProducts.filter(product => product.product_id !== payload.product.id );
        
        //Store products to localStorage
        localStorage.setItem('cart', JSON.stringify(products));
        return state;    

        default : return state;
     }

}

export default cartReducer;