export const incNumber = () =>{
    return{
        type: "ADD_TODO"
    }
}

export const decIncreaseNumber = () =>{
    return{
        type: "DECREASE_NUMBER"
    }
}


export const SET_PRODUCT = (product) =>{
    return{
        type: "SET_PRODUCT",
        payload:{
            data:product
        }
    }
}