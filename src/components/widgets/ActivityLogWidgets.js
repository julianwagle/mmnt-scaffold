import React from 'react';
import PropTypes from 'prop-types';
import { activities } from '../../data/notification/notification';
import { Card, CardBody } from 'reactstrap';
import CustomCardHeader from '../common/CustomCardHeader';
import { Link } from 'react-router-dom';
import Notification from '../notification/Notification';

const ActivityLog = ({ activityLogItem }) => {
  const activityLog = activities.slice(0, activityLogItem);

  return (
    <Card className="mb-3">
      <CustomCardHeader title="Activity log">
        <Link to="/social/activity" className="text-sans-serif">
          All logs
        </Link>
      </CustomCardHeader>

      <CardBody className="fs--1 p-0">
        {activityLog.map((activity, index) => {
          const roundedClass = activityLog.length === index + 1 ? 'rounded-top-0' : 'rounded-0';
          return (
            <Notification
              {...activity}
              key={index}
              className={`border-x-0 border-bottom-0 border-300 ${roundedClass}`}
            />
          );
        })}
      </CardBody>
    </Card>
  );
};

ActivityLog.propTypes = {
  activityLogItem: PropTypes.number.isRequired
};

export default ActivityLog;
