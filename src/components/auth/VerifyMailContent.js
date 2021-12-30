import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';
import withRedirect from '../../hoc/withRedirect';
import { toast } from 'react-toastify';
import canvasConfetti from '../common/Confetti';
import '../splash/splash.css';
import getGif from '../splash/getGif'
import getGradient from './utils/getGradient'
import createSubscription from '../../crud/subscription/createSubscription';
import createCustomer from '../../crud/customer/createCustomer'
import { signInWithEmailLink, updateProfile } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';
import StringCrypto from 'string-crypto';

const {decryptString} = new StringCrypto();

const VerifyMailContent = ({ setRedirect, setRedirectUrl }) => {

  var {setEmail} = useContext(AppContext);
  var {setCurrentUser} = useContext(AppContext);

  useEffect(() => {

    async function success(email){
      await setCurrentUser(firebaseAuth.currentUser)
      setRedirectUrl(`/dashboard`);
      setRedirect(true);
      toast.success(`Successfully logged in as ${email}!`);
      canvasConfetti()
    }

    async function getEmail(url){
      var email = url.split(process.env.REACT_APP_AUTHD_URL_SPLIT)[1]
      if (email) {
        email = decryptString(email, process.env.REACT_APP_SECRET_KEY);
        return email
      } else {
        return false
      }
    }

    async function newUser(email){
      var i = await createCustomer(email)
      await createSubscription(i)
      var g = getGradient()
      await updateProfile(
        firebaseAuth.currentUser,
        {photoURL: g, displayName: i}
      )
    }

    async function main(){
      var url = window.location.href
      var email = await getEmail(url)
      if (email) {
        var result = await signInWithEmailLink(firebaseAuth, email, url)
        if (!result.user.photoURL) {
            await newUser(email)
        }
        await success(email)
      }
    }

    main()
  }, [
    setEmail,
    setCurrentUser,
    setRedirectUrl, 
    setRedirect,
  ]);

  var gifUrl = getGif()[0]
  return (<img src={gifUrl} className='splash-screen' alt=''/>);
};

VerifyMailContent.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
};

export default withRedirect(VerifyMailContent);
