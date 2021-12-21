import React from 'react';
import PropTypes from 'prop-types';
import CustomCardFooterLink from '../common/CustomCardFooterLink';
import CardDropdown from './CardDropdown';
import CustomCardHeader from '../common/CustomCardHeader';
import { Card, CardBody } from 'reactstrap';
import ActiveUser from './ActiveUser';
import { isIterableArray } from '../../helpers/utils';

const ActiveUsers = ({ users }) => {
  return (
    <Card>
      <CustomCardHeader title="Active Users" titleTag="h6" className="py-2">
        <CardDropdown />
      </CustomCardHeader>
      <CardBody className="py-2">
        {isIterableArray(users) && users.map(({ id, ...rest }) => <ActiveUser {...rest} key={id} />)}
      </CardBody>
      <CustomCardFooterLink title="All active users" to="/social/people" borderTop={false} />
    </Card>
  );
};

ActiveUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      ...ActiveUser.propTypes
    })
  ).isRequired
};

export default ActiveUsers;
