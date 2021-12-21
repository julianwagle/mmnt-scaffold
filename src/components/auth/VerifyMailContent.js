import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';
import withRedirect from '../../hoc/withRedirect';

import { toast } from 'react-toastify';
import canvasConfetti from '../common/Confetti';

import '../splash/splash.css';
import getGif from '../splash/getGif'

import { signInWithEmailLink, updateProfile } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';

import getGradient from './utils/getGradient'

import StringCrypto from 'string-crypto';

const {decryptString} = new StringCrypto();

const VerifyMailContent = ({ setRedirect, setRedirectUrl }) => {

  var gifUrl = getGif()[0]

  function errorLog(error) {
    console.log(error);
    toast.error(`${error}`);
  }

  async function getCurrentUser(){
    return firebaseAuth.currentUser
  }
  
  var {setEmail} = useContext(AppContext);
  var {setCurrentUser} = useContext(AppContext);
  useEffect(() => {

    function success(email){
      getCurrentUser()
      .then((currentUser)=>{
        setCurrentUser(currentUser)
        setRedirectUrl(`/dashboard`);
        setRedirect(true);
        toast.success(`Successfully logged in as ${email}!`);
        canvasConfetti()
      })
    }

    var url = window.location.href
    var encryptedEmail = url.split(process.env.REACT_APP_AUTHD_URL_SPLIT)[1]
    if (encryptedEmail) {
      var email = decryptString(encryptedEmail, process.env.REACT_APP_SECRET_KEY);
      setEmail(email)

      signInWithEmailLink(firebaseAuth, email, url)
      .then((result) => {
        if (!result.user.photoURL) {
          updateProfile(firebaseAuth.currentUser, { 
            displayName: email.split('@')[0], 
            photoURL: getGradient()
          })
          .then(() => {success(email)})
        } else {success(email)}
      })
      .catch((error) => {errorLog(error)});

    }
  }, [
    setEmail,
    setCurrentUser,
    setRedirectUrl, 
    setRedirect,
  ]);

  return (
      <>
          <img src={gifUrl} className='splash-screen' alt=''/>
      </>

  );
};

VerifyMailContent.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
};


export default withRedirect(VerifyMailContent);
