import React, { useContext } from 'react';
import AppContext from '../../../context/Context';
import Sun from './lightSwitch/sun';
import Moon from './lightSwitch/moon';

const LightsAnimatedIcon = () => {
  const {
    isDark,
    setIsDark,
  } = useContext(AppContext);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <div
      className="settings-popover nav-link cursor-pointer"
      onClick={() => {
        toggleDark();
      }}
    >
      <span className="ripple" />
      <span className="fa-spin position-absolute a-0 d-flex flex-center">
        <span className="icon-spin position-absolute a-0 d-flex flex-center">
      { 
        (() => {
          if(!isDark) {return (<Sun/>)}
          else {return (<Moon/>)}
        })()
      }
        </span>
      </span>
    </div>
  );
};

export default LightsAnimatedIcon;
