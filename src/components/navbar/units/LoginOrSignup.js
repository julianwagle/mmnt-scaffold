import React from 'react';

import { Card, CardBody, Nav } from 'reactstrap';

// import Login from '../auth/basic/Login';
import LogInOrSignUp from '../../auth/basic/LogInOrSignUp';
import NavbarDropdown from '../dropdown/NavbarDropdown';

const LoginOrSignup = () => {

  return (
    <Nav navbar className="ml-auto">
      <NavbarDropdown title="Log in or Sign up" right>
        <Card className="navbar-card-login shadow-none">
          <CardBody className="fs--1 font-weight-normal p-4">
            <LogInOrSignUp />
          </CardBody>
        </Card>
      </NavbarDropdown>
    </Nav>
  );
};

export default LoginOrSignup;
