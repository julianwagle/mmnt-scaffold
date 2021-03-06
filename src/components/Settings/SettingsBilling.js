import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import CustomCardHeader from '../common/CustomCardHeader';

const SettingsBilling = () => (
  <Card className="mb-3">
    <CustomCardHeader title="Billing Settings" light={false} />
    <CardBody className="bg-light">
      <h5>Plan</h5>
      <p className="fs-0">
        <strong>Developer</strong>- Unlimited private repositories
      </p>
      <Button tag={Link} color="mysite-default" size="sm" to="#!">
        Update Plan
      </Button>
    </CardBody>
    <CardBody className="bg-light border-top">
      <h5>Payment</h5>
      <p className="fs-0">You have not added any payment.</p>
      <Button tag={Link} color="mysite-default" size="sm" to="#!">
        Add Payment
      </Button>
    </CardBody>
  </Card>
);

export default SettingsBilling;
