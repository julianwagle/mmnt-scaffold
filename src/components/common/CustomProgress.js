import React from 'react';
import PropTypes from 'prop-types';
import CustomProgressBar from './CustomProgressBar';

const CustomProgress = ({ value, className, style, color, barStyle, barClassName, multi, children, bar }) => {
  return (
    <>
      {bar === true ? (
        <CustomProgressBar />
      ) : (
        <div className={`progress ${className ?? ''} bg-${color}`} style={style}>
          {multi ? (
            children
          ) : (
            <CustomProgressBar value={value} className={barClassName} color={color} style={barStyle} />
          )}
        </div>
      )}
    </>
  );
};

CustomProgress.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  color: PropTypes.string,
  barStyle: PropTypes.object,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  style: PropTypes.object,
  multi: PropTypes.bool
};

CustomProgress.defaultProps = {
  value: 0
};

export default CustomProgress;
