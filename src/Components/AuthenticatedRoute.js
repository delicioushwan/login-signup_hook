import React, { useReducer } from 'react';

import authReducer from '../store/reducers/authReducer';

const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null
};

const AuthenticatedProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthenticatedProvider };