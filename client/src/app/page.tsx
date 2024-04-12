// ChatApp.jsx
'use client'
import React from 'react';
import Rooms from './components/Rooms';

const Home: React.FC = () => {
  const { Rooms, pageProps } = this.props;

  return (
    <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >      <Rooms {...pageProps} />
    </Auth0Provider>
  );
};

export default Home;
