const initialState = {
  exces: false,
  user:[]
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_USERDATE':
      if (state.login === action.value.email && state.password === action.value.password) {
        return {
          ...state,
          exces: true,
        };
      } else {
        break;
      }
      case "ADD_USER":
        return {
          ...state,
          user: action.value,
          exces:true
        };
    case 'EXIT':
      return {
        ...state,
        exces: action.value,
      };

    default:
      return state;
  }
};
