import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context/Context';
import { settings } from './config';
import toggleStylesheet from './helpers/toggleStylesheet';
import { getItemFromStore, setItemToStore, themeColors } from './helpers/utils';

import { onAuthStateChanged } from "firebase/auth";
import firebaseAuth from './firebase/authentication';
import readSubscription from './crud/subscription/readSubscription'

const Main = props => {
  const [email, setEmail] = useState(getItemFromStore('email', settings.email));
  const [currentUser, setCurrentUser] = useState(getItemFromStore('currentUser', settings.currentUser));
  const [subscription, setSubscription] = useState(getItemFromStore('subscription', settings.subscription));
  const [token, setToken] = useState(getItemFromStore('token', settings.token));
  const [isFluid, setIsFluid] = useState(getItemFromStore('isFluid', settings.isFluid));
  const [isRTL, setIsRTL] = useState(getItemFromStore('isRTL', settings.isRTL));
  const [isDark, setIsDark] = useState(getItemFromStore('isDark', settings.isDark));
  const [isTopNav, setIsTopNav] = useState(getItemFromStore('isTopNav', settings.isTopNav));
  const [isCombo, setIsCombo] = useState(getItemFromStore('isCombo', settings.isCombo));
  const [isVertical, setIsVertical] = useState(getItemFromStore('isVertical', settings.isVertical));
  const [isNavbarVerticalCollapsed, setIsNavbarVerticalCollapsed] = useState(
    getItemFromStore('isNavbarVerticalCollapsed', settings.isNavbarVerticalCollapsed)
  );
  const [currency, setCurrency] = useState(settings.currency);
  const [showBurgerMenu, setShowBurgerMenu] = useState(settings.showBurgerMenu);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpenSidePanel, setIsOpenSidePanel] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const [navbarStyle, setNavbarStyle] = useState(getItemFromStore('navbarStyle', settings.navbarStyle));

  const toggleModal = () => setIsOpenSidePanel(prevIsOpenSidePanel => !prevIsOpenSidePanel);
  const value = {
    currentUser, 
    setCurrentUser,
    email, 
    setEmail,
    subscription, 
    setSubscription,
    token, 
    setToken,
    isRTL,
    isDark,
    isCombo,
    isFluid,
    setIsRTL,
    isTopNav,
    currency,
    setIsDark,
    setIsCombo,
    setIsFluid,
    isVertical,
    toggleModal,
    setIsTopNav,
    navbarStyle,
    setCurrency,
    setIsVertical,
    showBurgerMenu,
    setNavbarStyle,
    isOpenSidePanel,
    navbarCollapsed,
    setShowBurgerMenu,
    setIsOpenSidePanel,
    setNavbarCollapsed,
    isNavbarVerticalCollapsed,
    setIsNavbarVerticalCollapsed
  };

  const setStylesheetMode = mode => {
    setIsLoaded(false);
    setItemToStore(mode, value[mode]);
    toggleStylesheet({ isRTL, isDark }, () => setIsLoaded(true));
  };

  useEffect(() => {
    setItemToStore('email', email);
    // eslint-disable-next-line
  }, [email]);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setItemToStore('currentUser', user);
      if (user) {
        setItemToStore('email', user.email);
        setItemToStore('token', user.getIdToken());
        setItemToStore('subscription', readSubscription(user.displayName))
      } else {
        // setItemToStore('email', '');
        setItemToStore('token', '');
        setItemToStore('subscription', '')
      }
    });
    // eslint-disable-next-line
}, []);


  useEffect(() => {
    setStylesheetMode('isFluid');
    // eslint-disable-next-line
  }, [isFluid]);

  useEffect(() => {
    setStylesheetMode('isRTL');
    // eslint-disable-next-line
  }, [isRTL]);

  useEffect(() => {
    setStylesheetMode('isDark');
    // eslint-disable-next-line
  }, [isDark]);

  useEffect(() => {
    setItemToStore('isNavbarVerticalCollapsed', isNavbarVerticalCollapsed);
    // eslint-disable-next-line
  }, [isNavbarVerticalCollapsed]);

  useEffect(() => {
    setItemToStore('isTopNav', isTopNav);
    // eslint-disable-next-line
  }, [isTopNav]);

  useEffect(() => {
    setItemToStore('isCombo', isCombo);
    // eslint-disable-next-line
  }, [isCombo]);
  useEffect(() => {
    setItemToStore('isVertical', isVertical);
    // eslint-disable-next-line
  }, [isVertical]);

  useEffect(() => {
    setItemToStore('navbarStyle', navbarStyle);
    // eslint-disable-next-line
  }, [navbarStyle]);

  if (!isLoaded) {
    toggleStylesheet({ isRTL, isDark }, () => setIsLoaded(true));

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: isDark ? themeColors.dark : themeColors.light
        }}
      />
    );
  }

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
