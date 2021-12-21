import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogInOrSignUpForm from '../LogInOrSignUpForm';

import AuthCardLayout from '../../../layouts/AuthCardLayout';

const Login = () => (
    <AuthCardLayout
      leftSideContent={
        <Fragment>
          <p className="mb-0 mt-4 mt-md-5 fs--1 font-weight-semi-bold text-300">
            Read our{' '}
            <Link className="text-underline text-300" to="#!">
              terms
            </Link>{' '}
            and{' '}
            <Link className="text-underline text-300" to="#!">
              conditions{' '}
            </Link>
          </p>
        </Fragment>
      }
    >
      <h3>Log in or Sign up</h3>
      <LogInOrSignUpForm layout="card" hasLabel />
    </AuthCardLayout>
  );

export default Login;
