

const formReducer = (state, action) => {
  
    switch (action.type) {
      case 'SET_USER':
        state.username=action.Username
       
       
        return { ...state
          };
          case 'SET_PASSWORD':
            state.password=action.Password
           
           
            return { ...state
              };
              case 'SET_EMAIL':
                state.email=action.email
               
               
                return { ...state
                  };
           
      case 'RESET':
        return state;
      default:
        return state;
    }
  };
  export default formReducer;