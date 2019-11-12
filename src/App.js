import React from 'react';

import Router from './Components/Router';
import { AuthenticatedProvider } from './Components/AuthenticatedRoute';

export default () => {

  return (
    <AuthenticatedProvider>
      <Router />
    </AuthenticatedProvider>
  );
};