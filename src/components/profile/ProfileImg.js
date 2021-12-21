import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';

import avatar from '../../assets/img/team/avatar.png'

const ProfileImg = ({size}) => {
    var {currentUser} = useContext(AppContext);
    var i = avatar
    if (currentUser) {
        i = currentUser.photoURL 
    }
    else { 
        i = avatar
    }
    return (
        <img src={i} width={size} alt="" />
    )
}
ProfileImg.propTypes = {
  size: PropTypes.string
};
ProfileImg.defaultProps = { size: '200' };

export default ProfileImg;

