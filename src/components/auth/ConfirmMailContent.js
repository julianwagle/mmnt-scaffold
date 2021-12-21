import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';

import envelope from '../../assets/img/illustrations/envelope.png';

const ConfirmMailContent = ({titleTag: TitleTag }) => {
  var {email} = useContext(AppContext);

  return (

    <Fragment>
      <img className="d-block mx-auto mb-4" src={envelope} alt="sent" width={70} />
      <TitleTag>Please check your email!</TitleTag>
      <p>
        An email has been sent to <strong>{email}</strong>. Please click on the included link to log in.
      </p>

    </Fragment>
  );
  
};
ConfirmMailContent.propTypes = {
  layout: PropTypes.string,
  titleTag: PropTypes.string
};

ConfirmMailContent.defaultProps = { layout: 'card', titleTag: 'h4' };

export default ConfirmMailContent;
