import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, CardBody } from 'reactstrap';
import withRedirect from '../../hoc/withRedirect';
import { deleteUser } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';
import AppContext from '../../context/Context';

const SettingsDangerZoneDeleteAccount = ({ setRedirect, setRedirectUrl}) => {
  var {setCurrentUser} = useContext(AppContext);

    // Handler
  const handleSubmit = e => {
    e.preventDefault();
    deleteUser(firebaseAuth.currentUser)
    .then(() => {
      setCurrentUser(null)
      toast.error(`Account has been deleted. There's no going back now.`);
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
        <h5 className="fs-0">Delete this account</h5>
        <p className="fs--1">Once you delete a account, there is no going back. Please be certain.</p>
        <Form onSubmit={handleSubmit}>
          <Button color="mysite-danger" block className="mt-3" disabled={false}>
            Delete Account
          </Button>
        </Form>
      </CardBody>
  )
};

SettingsDangerZoneDeleteAccount.propTypes = {
  className: PropTypes.string,
  setRedirect: PropTypes.func,
  setRedirectUrl: PropTypes.func,
};

export default withRedirect(SettingsDangerZoneDeleteAccount);
