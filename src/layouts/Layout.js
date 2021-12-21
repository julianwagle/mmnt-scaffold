import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';

import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';

import loadable from '@loadable/component';
const AuthBasicLayout = loadable(() => import('./AuthBasicLayout'));
const Landing = loadable(() => import('../components/landing/Landing'));
const AuthCardRoutes = loadable(() => import('../components/auth/card/AuthCardRoutes'));

const Layout = () => {
  useEffect(() => {
    AuthBasicLayout.preload();
    Landing.preload();
    AuthCardRoutes.preload();
  }, []);

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/authentication/card" component={AuthCardRoutes} />
        <Route path="/errors" component={ErrorLayout} />
        <Route path="/authentication/basic" component={AuthBasicLayout} />
        <Route component={DashboardLayout} />
      </Switch>
      <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
  );
};

export default Layout;
