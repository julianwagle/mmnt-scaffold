import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';
import withRedirect from '../../hoc/withRedirect';

import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Divider from '../common/Divider';
import SocialAuthButtons from './SocialAuthButtons';

import { sendSignInLinkToEmail } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';

import StringCrypto from 'string-crypto';
const {encryptString} = new StringCrypto();
var p = process.env.REACT_APP_SECRET_KEY

const LogInOrSignUpForm = ({ setRedirect, setRedirectUrl, hasLabel, layout }) => {
  // State
  var {email, setEmail} = useContext(AppContext);

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    setEmail(email);
    var encryptedEmail = encryptString(email, p);
    var urlEnd = `${process.env.REACT_APP_AUTHD_URL_SPLIT}${encryptedEmail}${process.env.REACT_APP_AUTHD_URL_SPLIT}`
    const actionCodeSettings = {
      url: `${process.env.REACT_APP_AUTHD_URL}/${urlEnd}`,
      handleCodeInApp: true
    };
    sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
      .then(() => {
        toast.success(`Authentication E-mail sent to ${email}`);
        setRedirect(true);
      })
      .catch((error) => {
        toast.error(`${error.code}: ${error.message}`);
        setRedirect(false);
      });
  };

  useEffect(() => {
    setRedirectUrl(`/authentication/${layout}/confirm-mail`);
  }, [setRedirectUrl, layout]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        {hasLabel && <Label>Email address</Label>}
        <Input
          placeholder={!hasLabel ? 'Email address' : ''}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary" block className="mt-3" disabled={false}>
          Let's Go!
        </Button>
      </FormGroup>
      <Divider className="mt-4">or you can use</Divider>
      <SocialAuthButtons />
    </Form>
  );
};

LogInOrSignUpForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LogInOrSignUpForm.defaultProps = {
  layout: 'card',
  hasLabel: false
};

export default withRedirect(LogInOrSignUpForm);
