const initialState = {
  exces: false,
  user:[]
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
   
      case "ADD_USER":
        return {
          ...state,
          user: action.value,
          exces:true
      };
    case 'UPDATE_USER':
      console.log(state)
      return {
        ...state,
        user:action.value
      }
    case 'EXIT':
      return {
        user:action.value,
        exces: false
      };

    default:
      return state;
  }
};
