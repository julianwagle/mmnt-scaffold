import React from 'react';
// import React, {useContext, setContext} from 'react';
// import AppContext from './context/Context';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Layout';
import withSplashScreen from './components/splash/splash';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datetime/css/react-datetime.css';
import 'react-image-lightbox/style.css';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from '@apollo/client';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

const App = () => {
  // var {token} = useContext(AppContext);
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GQL,
    cache: new InMemoryCache()
  })
  return (
  <ApolloProvider client={client}>
    <Elements stripe={stripePromise}>
      <Router basename={process.env.PUBLIC_URL}>
        <Layout />
      </Router>
    </Elements>
  </ApolloProvider>
  );
};

export default withSplashScreen(App);
