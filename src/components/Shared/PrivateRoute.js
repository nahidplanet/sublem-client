

import React from 'react';
import { Navigate, Route } from 'react-router';
import GoogleAuth from '../Pages/SignIn/SignIn';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        GoogleAuth.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Navigate replace 
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
