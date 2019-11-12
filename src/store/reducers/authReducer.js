import * as Action from '../actions';

const authReducer = (state, action) => {
  switch (action.type) {
    case Action.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case Action.LOGIN: {
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