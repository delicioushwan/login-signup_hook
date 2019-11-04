import * as Action from '../actions'

const formReducer = (state, action) => {
  switch (action.type) {
    case Action.SETVALIDATIONRULES: {
      return {
        ...state,
        validationRules: {
          ...state.validationRules,
          ...action.payload
        }
      };
    }
    case Action.UPDATE: {
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload.values
        },
        errors: {
          ...state.errors,
          ...action.payload.errors
        }
      };
    }
    case Action.SETCONFIG: {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default formReducer;