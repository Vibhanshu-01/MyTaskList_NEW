import {toast} from "react-toastify"

const mytaskReducer=( state= [] , action)=>{
    switch(action.type){
        case "GET_MYTASKS" :
            return action.mytasks.data ;
        case "ADD_MYTASK" : 
        toast.success("Your Task was Added..." , {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        return [action.mytask.data , ...state] ;

        case "UPDATE_MYTASK" :
            toast.success("Your Task was Updated ..." , {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        return  state.map((mytask)=>  mytask._id === action.mytask.data._id ? action.mytask.data: mytask 
        )

        case "CHECK_MYTASK" :
            toast.success("Your Task completion status Changed..." , {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        return  state.map((mytask)=>  mytask._id === action.mytask.data._id ? action.mytask.data: mytask 
        )

        case "DELETE_MYTASK" :
            toast.success("One of your task was deleted .." , {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        return  state.filter((mytask)=>  mytask._id !== action.id
        )
        default:
        return state
    }
}


export default mytaskReducer 