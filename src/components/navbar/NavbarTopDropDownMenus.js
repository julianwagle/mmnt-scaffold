import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavbarDropdown from './dropdown/NavbarDropdown';
import NavbarDropdownComponents from './dropdown/NavbarDropdownComponents';
import {
  authenticationRoutes,
  profileRoutes,
  billingRoutes,
  componentRoutes,
  ECommerceRoutes,
  socialRoutes,
  emailRoutes,
  errorsRoutes,
  homeRoutes,
  funnelRoutes,
  toolsRoutes,
  pluginRoutes,
  utilityRoutes,
} from '../../routes';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { breakpoints } from '../../helpers/utils';
import { navbarBreakPoint, topNavbarBreakpoint } from '../../config';
import AppContext from '../../context/Context';


const NavbarTopDropDownMenus = ({ setNavbarCollapsed, setShowBurgerMenu }) => {
  const { isCombo, isTopNav } = useContext(AppContext);
  var {currentUser} = useContext(AppContext);

  const components = [componentRoutes, pluginRoutes, utilityRoutes];

  const pages = [toolsRoutes, billingRoutes, socialRoutes, emailRoutes, ECommerceRoutes, funnelRoutes, errorsRoutes];

  const handleSetNavbarCollapsed = () => {
    const windowWidth = window.innerWidth;
    isTopNav && !isCombo && windowWidth < breakpoints[topNavbarBreakpoint] && setNavbarCollapsed(false);
    isCombo && windowWidth < breakpoints[navbarBreakPoint] && setShowBurgerMenu(false);
  };

  return (
    <>
      <NavbarDropdown
        title={homeRoutes.name}
        items={homeRoutes.children}
        handleSetNavbarCollapsed={handleSetNavbarCollapsed}
      />

      <NavbarDropdown title={'Pages'} items={pages} handleSetNavbarCollapsed={handleSetNavbarCollapsed} />


      <NavbarDropdownComponents
        title={componentRoutes.name}
        items={components}
        handleSetNavbarCollapsed={handleSetNavbarCollapsed}
      />

      { 
        (() => {
          if(currentUser) {
            return (
              <NavbarDropdown
                title={profileRoutes.name}
                items={profileRoutes.children}
                handleSetNavbarCollapsed={handleSetNavbarCollapsed}
              />            
            )
          }
         else {
           return (
            <NavbarDropdown
              title={authenticationRoutes.name}
              items={authenticationRoutes.children}
              handleSetNavbarCollapsed={handleSetNavbarCollapsed}
            />
           )
         }
        })()
      }



        <NavItem onClick={handleSetNavbarCollapsed}>
          <NavLink className="nav-link" to="/documentation">
            Docs
          </NavLink>
        </NavItem>

    </>
  );
};

NavbarTopDropDownMenus.propTypes = { setNavbarCollapsed: PropTypes.func.isRequired };

export default NavbarTopDropDownMenus;
