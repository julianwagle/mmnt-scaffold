import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import './helpers/initFA';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main>
      {/* Router, Layout */}
      <App />
    </Main>
  </ApolloProvider>
,
  document.getElementById('main')
);
