import React from 'react';
import {HashRouter as Route, Router} from 'react-router-dom';

import LogIn from '../hooks/LogIn';
import useAuth from '../Utils/useAuth';


export default () => {
  const { state } = useAuth();
  state.isAuthenticated ? console.log('login') : console.log('none') 
  return (
      <LogIn />
  );
};
