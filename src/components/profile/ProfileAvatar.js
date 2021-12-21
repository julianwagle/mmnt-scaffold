import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';

import Avatar from '../common/Avatar';

import avatar from '../../assets/img/team/avatar.png'


const ProfileAvatar = ({size, className, mediaClass}) => {
    var {currentUser} = useContext(AppContext);
    console.log(currentUser)
    var i = avatar
    if (currentUser) {
        i = currentUser.photoURL 
    }
    else { 
        i = avatar
    }
    return (
        <Avatar 
            src={i} 
            size={size}
            className={className}
            mediaClass={mediaClass}
        />
    )
}
ProfileAvatar.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  mediaClass: PropTypes.string
};
ProfileAvatar.defaultProps = { 
    size: 'xl',
    className: '', 
    mediaClass: '' 
};

export default ProfileAvatar;

