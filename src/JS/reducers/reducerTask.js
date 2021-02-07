import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK,
    TOGGLE,
  } from '../constant/actionTypes';

  const initial = {
      list : [],
      filtered: false,
  }

  const reducerTask = (state = initial, action) => {
      switch(action.type) {
        case ADD_TASK:
            // return current state if empty
            if (!action.payload.text) {
              alert('Insert a field ')
              return state;
              
            }
            // return current state if duplicate
            else if (state.list.find(el=>el.text===action.payload.text)) {
              alert('Insert another field, this field is exists')
              return state;
            }
            else return {
              ...state,
              list: [...state.list, action.payload]
            };
          case DELETE_TASK:
          return {...state, list:state.list.filter((item)=>item.id !== action.id)};

          case CHECK_TASK:
          return {...state, list:state.list.map((el)=>el.id === action.payload.id ? {...el, isDone: !el.isDone}: el)}

          case EDIT_TASK:
          return {...state, list: state.list.map((el)=> el.id===action.payload.id?{...el, text:action.payload.text}: el)}
        

              default:
              return state
      }
  }

  export default reducerTask
  