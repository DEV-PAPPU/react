const initialData = 0;

const changeNumber =(state = initialData, action) =>{

     switch(action.type){
        case "ADD_TODO" : return state + 1;
        case "DECREASE_NUMBER" : return state - 1;
        default : return state;
     }

}

export default changeNumber;