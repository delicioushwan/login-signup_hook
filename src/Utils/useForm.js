import { useReducer} from 'react';
import formReducer from '../store/reducers/formReducer';

const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    errors: {},
    values: {},
    validationRules: {},
    config: {}
  });
  const isValid = () => {
    const { values, errors } = state;
    const valueCheck = () => {
      const valueKeys = Object.keys(state.values)
      if (valueKeys.length === 0) return true;

      for (let i = 0; i < valueKeys.length; i++ ) {
        if (!values[valueKeys[i]]) {
          return true;
        }
      }
      return false;
    }
    const errorCheck = () => {
      const errorKeys = Object.keys(state.errors)
      if (errorKeys.length === 0) return true;
      for (let i = 0; i < errorKeys.length; i++ ) {
        if (errors[errorKeys[i]].length) {
          return true;
        }
      }
      return false;
    }
    return valueCheck() || errorCheck();
  };

  return {
    values: state.values,
    errors: state.errors,
    isValid,
    dispatch
  };
};

export default useForm;
