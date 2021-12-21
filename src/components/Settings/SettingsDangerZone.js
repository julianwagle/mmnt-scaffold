import React from 'react';
import PropTypes from 'prop-types';
import { Card,  } from 'reactstrap';
import CustomCardHeader from '../common/CustomCardHeader';
import SettingsDangerZoneChangeEmail from './SettingsDangerZoneChangeEmail'
import SettingsDangerZoneDeleteAccount from './SettingsDangerZoneDeleteAccount'

const SettingsDangerZone = ({props}) => {

  return (
    <Card {...props}>
      <CustomCardHeader title="Danger Zone" light={false} />
      <SettingsDangerZoneChangeEmail/>
      <SettingsDangerZoneDeleteAccount/>
    </Card>
  )
};

SettingsDangerZone.propTypes = {
  className: PropTypes.string,
};

export default SettingsDangerZone;
