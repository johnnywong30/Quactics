import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// Pages are Components to render
import Home from './Pages/Home'
import Auth from './Pages/Auth'

const RestrictedRoute = ({component: Component, ...routeProps}) => {
  const authUser = useSelector( ({auth}) => auth.authUser )
  return (
      <Route
          {...routeProps}
          render = {(props) =>
              authUser ? (
                  <Component {...props} />
              ) : (
                  <Redirect
                      to={{
                          pathname: '/auth/login',
                          state: { from: props.location },
                      }}
                  />
              )
          }
      />
  )
}

const Routes = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Auth} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
