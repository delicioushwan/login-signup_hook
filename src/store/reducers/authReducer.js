import * as Action from '../actions';

const authReducer = (state, action) => {
  console.log('run')
  switch (action.type) {
    case Action.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case Action.LOGIN: {
      console.log('run')
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;