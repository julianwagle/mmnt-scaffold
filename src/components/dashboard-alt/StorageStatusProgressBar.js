import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CustomProgress from '../common/CustomProgressBar';

const StorageStatusProgressBar = ({ color, percentage, isLast }) => (
  <CustomProgress
    bar
    value={percentage}
    color={color}
    className={classNames({ 'border-right border-white border-2x': !isLast })}
  />
);

StorageStatusProgressBar.propTyeps = {
  color: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  isLast: PropTypes.bool
};

StorageStatusProgressBar.defaultProps = { isLast: false };

export default StorageStatusProgressBar;
