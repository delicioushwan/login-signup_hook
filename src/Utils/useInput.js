/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import * as Action from '../store/actions';
import handleValidation from './handleValidation';

const useInput = ({ validation, ...config }, form) => {
  useEffect(() => {
      form.dispatch({
        type: Action.SETVALIDATIONRULES,
        payload: { [config.name]: validation }
      });
      form.dispatch({
        type: Action.SETCONFIG,
        payload: { [config.name]: config }
      });
      form.dispatch({
        type: Action.UPDATE,
        payload: {
          values: {
            [config.name]: ''
          }
        }
      })
  }, []);

  const errors = form.errors[config.name] ? form.errors[config.name] : [];
  const value = form.values[config.name] ? form.values[config.name] : '';

  const valueSetter = e => {
    const { value } = e.target;
    form.dispatch({
      type: Action.UPDATE,
      payload: {
        values: {
          [config.name]: value
        },
        errors: {
          [config.name]: []
        }
      }
    });
  };

  const validateField = e => {
    let newErrors = [];
    if (validation !== undefined) {
      Object.keys(validation).forEach(key => {
        // value, test, key, state
        const validationconfig = {
          value,
          test: validation[key],
          key,
          displayName: config.placeholder
        };
        const err = handleValidation(validationconfig);
        if (err) {
          newErrors.push(err);
        }
      });
    }
    form.dispatch({
      type: Action.UPDATE,
      payload: {
        values: {
          [config.name]: value
        },
        errors: {
          [config.name]: newErrors
        }
      }
    });
  };

  return {
    ...config,
    errors: errors,
    onChange: valueSetter,
    onBlur: validateField,
    value: value
  };
};

export default useInput;
