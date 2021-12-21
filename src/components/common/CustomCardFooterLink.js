import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const CustomCardFooterLink = ({ title, bg, borderTop, to, ...rest }) => (
  <CardFooter className={classNames(`bg-${bg} py-2`, { 'border-top': borderTop })}>
    <Button tag={Link} color="link" block to={to} {...rest}>
      {title}
      <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
    </Button>
  </CardFooter>
);

CustomCardFooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  borderTop: PropTypes.bool,
  to: PropTypes.string
};

CustomCardFooterLink.defaultProps = { to: '#!', bg: 'light', borderTop: true };

export default CustomCardFooterLink;
