import React, { Fragment } from 'react';

import { CardHeader, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cloud from '../../assets/img/icons/cloud-upload.svg';
import firebaseUploadFiles from '../../storage/upload';

const Test = () => {

  return (
    <CardHeader className={`position-relative min-vh-25 mb-8`}>
        <Fragment className={`position-relative min-vh-25 mb-8`}>
          <div className="avatar avatar-5xl avatar-profile shadow-sm img-thumbnail rounded-circle">
            <div className="h-100 w-100 rounded-circle overflow-hidden position-relative">
              <img src={cloud} width="200" alt="" />
              <Input 
                className="d-none" 
                id="profile-file" 
                type="file" 
                name='file[]'
                multiple
                onChange={(e) => firebaseUploadFiles(e.target.files)}
                />
              <Label className="mb-0 overlay-icon d-flex flex-center" htmlFor="profile-file">
                <span className="bg-holder overlay overlay-0" />
                <span className="z-index-1 text-white text-center fs--1">
                  <FontAwesomeIcon icon="camera" />
                  <span className="d-block">Upload Video</span>
                </span>
              </Label>
            </div>
          </div>
        </Fragment>
    </CardHeader>

  );
};


export default Test;
