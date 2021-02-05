import { ADD_TASK, DELETE_TASK, CHECK_TASK, EDIT_TASK, TOGGLE,} from '../constant/actionTypes'

export const newTask=(payload) =>{
    return {
        type: ADD_TASK, 
        payload,
    }
}

export const deleteTask=(id) =>{
    return {
        type: DELETE_TASK,
        id,
    }
}

export const checkTask=(payload) =>{
    return{
       type:CHECK_TASK,
       payload,
    }
}

export const editItem=(payload)=>{
    return{
        type:EDIT_TASK,
        payload
    }
}
export const toggle= () => {
    return{
       type:TOGGLE,
    }
}