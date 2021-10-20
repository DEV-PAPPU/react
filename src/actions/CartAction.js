
export const ADD_TO_CART = (product) =>{
    return{
        type: "ADD_TO_CART",
        payload:{
            product:product
        }
    }
}

export const ADD_ITEM_REMOVE = (id) =>{
    return{
        type: "ADD_TO_CART",
        payload:{
            product:id
        }
    }
}