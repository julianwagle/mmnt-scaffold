import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import LogInOrSignUpForm from '../LogInOrSignUpForm';

const LogInOrSignUp = () => (
  <Fragment>
    <Row className="text-left justify-content-between mb-2">
      <Col xs="auto">
        <h5>Log in or Sign up</h5>
      </Col>
    </Row>
    <LogInOrSignUpForm />
  </Fragment>
);

export default LogInOrSignUp;
