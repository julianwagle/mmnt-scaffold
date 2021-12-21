import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogInOrSignUp from './LogInOrSignUp';
import ConfirmMail from './ConfirmMail';
import VerifyMail from './VerifyMail';
import Logout from './Logout';

const AuthCardRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/login-or-signup`} exact component={LogInOrSignUp} />
    <Route path={`${url}/confirm-mail`} exact component={ConfirmMail} />
    <Route path={`${url}/verify-mail/*`} exact component={VerifyMail} />
    <Route path={`${url}/verify-mail`} exact component={VerifyMail} />
    <Route path={`${url}/log-out`} exact component={Logout} />
    {/*Redirect*/}
    <Redirect to="/errors/404" />
  </Switch>
);

export default AuthCardRoutes;
