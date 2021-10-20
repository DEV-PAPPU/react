const initialData ={
    product:[]
};

const PRODUCTSINGLE =(state = initialData, {type, payload}) =>{

     switch(type){

        // case "SET_PRODUCT" : return state + 1;
        case "SET_PRODUCT" : return  {...state, payload};  
        default : return state;
     }

}

export default PRODUCTSINGLE;