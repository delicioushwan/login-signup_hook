import { useContext } from 'react';
import { AuthContext } from "../Components/AuthenticatedRoute";

import * as Action from '../store/actions';

const useAuth = () => {
  const {state, dispatch} = useContext(AuthContext);

  const logIn = (user='test', token='werweg34tr34gregd') => dispatch({
    type: Action.LOGIN,
    payload: {
      user, token 
    }
  });
  const logOut = () => dispatch({ type: Action.LOGOUT});
  return {logIn, logOut, state};
};

export default useAuth;