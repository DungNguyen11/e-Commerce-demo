import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoginAndRegisterRoute = ({component: Component, ...props }) => {

  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Component {...routeProps} />
        </>
      )}
    >
    </Route>
  )
}

export default LoginAndRegisterRoute
