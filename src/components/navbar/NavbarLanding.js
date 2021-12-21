import React, { useEffect, useState, useContext } from 'react';
import AppContext from '../../context/Context';

import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import LoginOrSignup from './units/LoginOrSignup';
import { topNavbarBreakpoint } from '../../config';


const NavbarLanding = () => {
  var {currentUser} = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      dark
      fixed="top"
      expand={topNavbarBreakpoint}
      className={classNames('navbar-standard navbar-theme', {
        'bg-dark': !navbarCollapsed
      })}
    >
      <Container>
        <NavbarBrand className="text-white" tag={Link} to="/">
          Mysite
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Collapse isOpen={!navbarCollapsed} navbar className="scrollbar">
          <Nav navbar>
            <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
          </Nav>
          { 
            (() => {
              if(!currentUser) {
                return (<LoginOrSignup />)
              }
            })()
          }
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLanding;
