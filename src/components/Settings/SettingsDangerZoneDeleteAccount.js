import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, CardBody } from 'reactstrap';
import withRedirect from '../../hoc/withRedirect';
import { deleteUser } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';
import AppContext from '../../context/Context';
import deleteCustomer from '../../crud/customer/deleteCustomer'
import deleteSubscription from '../../crud/subscription/deleteSubscription'

const SettingsDangerZoneDeleteAccount = ({ setRedirect, setRedirectUrl}) => {

  // var {setEmail} = useContext(AppContext); // rm for faster testing
  var {currentUser, setCurrentUser} = useContext(AppContext);
  var {setSubscription} = useContext(AppContext);
  var {setToken} = useContext(AppContext);

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    async function success(){
      setCurrentUser(null);
      // setEmail(null); // rm for faster testing
      setToken(null);
      setSubscription(null);
      toast.error(`Account has been deleted.`);
      toast.error(`Subscription has been deleted.`);
      toast.error(`There's no going back now.`);
      setRedirect(true);
    }

    async function failure(e){
      toast.error(`${e}`);
      setRedirect(false);
    }
  
    async function main(){
      try {
        var i = currentUser.displayName
        // set first bc likely to fail
        await deleteUser(firebaseAuth.currentUser)
        await deleteSubscription(i)
        await deleteCustomer(i)
        success()
      } catch (error) {
        failure(error)
      }
    };

    main()
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
