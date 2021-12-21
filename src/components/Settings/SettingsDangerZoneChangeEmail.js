import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';

import { toast } from 'react-toastify';
import { FormGroup, Input, Button, Form, CardBody } from 'reactstrap';
import withRedirect from '../../hoc/withRedirect';
import { updateEmail } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';

const SettingsDangerZoneChangeEmail = ({ setRedirect, setRedirectUrl}) => {
  var {email, setEmail} = useContext(AppContext);

    // Handler
  const handleSubmit = e => {
    e.preventDefault();
    setEmail(email);
    updateEmail(firebaseAuth.currentUser, email)
      .then(() => {
        toast.error(`Account has been updated. There's no going back now.`);
        setRedirect(true);
    }).catch((error) => {
        toast.error(`${error.code}: ${error.message}`);
        setRedirect(false);
    });
  };
  useEffect(() => {
    setRedirectUrl(`/`);
  }, [setRedirectUrl]);

  return (

      <CardBody className="bg-light">
        <h5 className="fs-0">Transfer to another email</h5>
        <p className="fs--1">Once you transfer the email, there is no going back. Please be certain.</p>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            placeholder={'Email address'}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Button color="mysite-danger" block className="mt-3" disabled={false}>
            Change Email
          </Button>
        </FormGroup>
        </Form>
      </CardBody>
  )
};

SettingsDangerZoneChangeEmail.propTypes = {
  className: PropTypes.string,
  setRedirect: PropTypes.func,
  setRedirectUrl: PropTypes.func,
};

export default withRedirect(SettingsDangerZoneChangeEmail);
