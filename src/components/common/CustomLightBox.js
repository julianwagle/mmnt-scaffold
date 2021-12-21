import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const CustomLightBox = ({ imgSrc, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={imgSrc}
          onCloseRequest={() => setIsOpen(false)}
          reactModalStyle={{ overlay: { zIndex: 999999 } }}
        />
      )}
    </Fragment>
  );
};

CustomLightBox.propTypes = { imgSrc: PropTypes.string.isRequired };

export default CustomLightBox;
