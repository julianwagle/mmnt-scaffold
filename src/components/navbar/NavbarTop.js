import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavItem, Nav, NavbarBrand, } from 'reactstrap';
import classNames from 'classnames';
import AppContext from '../../context/Context';
import SearchBox from './units/SearchBox';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { navbarBreakPoint, topNavbarBreakpoint } from '../../config';
import autoCompleteInitialItem from '../../data/autocomplete/autocomplete';
import ProfileDropdown from './units/ProfileDropdown';
import NotificationDropdown from './units/NotificationDropdown';
import LightsAnimatedIcon from './units/LightsAnimatedIcon';

const NavbarTop = () => {
  const {
    showBurgerMenu,
    setShowBurgerMenu,
    isTopNav,
    isVertical,
    isCombo,
    navbarCollapsed,
    setNavbarCollapsed
  } = useContext(AppContext);
  const handleBurgerMenu = () => {
    isTopNav && !isCombo && setNavbarCollapsed(!navbarCollapsed);
    (isCombo || isVertical) && setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <Navbar
      light
      className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit"
      expand={isTopNav && topNavbarBreakpoint}
    >
      <div
        className={classNames('toggle-icon-wrapper mr-md-3 mr-2', {
          'd-lg-none': isTopNav && !isCombo,
          [`d-${navbarBreakPoint}-none`]: isVertical || isCombo
        })}
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </div>
        <NavbarBrand className="text-primary" tag={Link} to="/">
          mysite
        </NavbarBrand>
        {isTopNav ? (
        <Collapse navbar isOpen={navbarCollapsed} className="scrollbar">
          <Nav navbar>
            <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
          </Nav>
        </Collapse>
      ) : (
        <Nav navbar className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}>
          <NavItem>
            <SearchBox autoCompleteItem={autoCompleteInitialItem} />
          </NavItem>
        </Nav>
      )}

      <Nav navbar className="navbar-nav-icons ml-auto flex-row align-items-center">
        <NavItem>
          <LightsAnimatedIcon />
        </NavItem>
        <NotificationDropdown />
        <ProfileDropdown />
      </Nav>
    </Navbar>
  );
};

export default NavbarTop;
