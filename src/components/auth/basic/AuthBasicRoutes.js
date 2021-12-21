import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import LogInOrSignUp from './LogInOrSignUp';

const AuthBasicRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/login-or-signup`} exact component={LogInOrSignUp} />
    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

AuthBasicRoutes.propTypes = { match: PropTypes.object.isRequired };

export default withRouter(AuthBasicRoutes);
