import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardHeader, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from '../common/Background';
import ProfileAvatar from '../profile/ProfileAvatar';
import ProfileImg from '../profile/ProfileImg';

const ProfileBannerHeader = ({ coverSrc, isEditable }) => {
  return (
    <CardHeader className={`position-relative min-vh-25 ${isEditable ? 'mb-8' : 'mb-7'}`}>
      {isEditable ? (
        <Fragment>
          <div className="cover-image">
            <Background image={coverSrc} className="rounded-soft rounded-bottom-0 bg-dark" />
            <Input className="d-none" id="upload-cover-image" type="file" />
            <Label className="cover-image-file-input" htmlFor="upload-cover-image">
              <FontAwesomeIcon icon="camera" className="mr-2" />
              <span>Change cover photo</span>
            </Label>
          </div>
          <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
            <div className="h-100 w-100 rounded-circle overflow-hidden position-relative">

              <ProfileImg/>

              <Input className="d-none" id="profile-image" type="file" />
              <Label className="mb-0 overlay-icon d-flex flex-center" htmlFor="profile-image">
                <span className="bg-holder overlay overlay-0" />
                <span className="z-index-1 text-white text-center fs--1">
                  <FontAwesomeIcon icon="camera" />
                  <span className="d-block">Update</span>
                </span>
              </Label>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Background image={coverSrc} className="rounded-soft rounded-bottom-0 bg-dark" />
          <ProfileAvatar
            size="5xl"
            className="avatar-profile"
            mediaClass="img-thumbnail shadow-sm"
          />
        </Fragment>
      )}
    </CardHeader>
  );
};

ProfileBannerHeader.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  isEditable: PropTypes.bool
};

ProfileBannerHeader.defaultProps = { isEditable: false };

export default ProfileBannerHeader;
