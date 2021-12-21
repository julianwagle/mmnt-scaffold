import React, { Fragment } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../common/PageHeader';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomEditor from '../common/CustomEditor';

const contextualCode = `['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color, index) => (
  <Badge color={color} key={index} className="mr-2" >
    {color}
  </Badge>
))`;

const softBadgesCode = `['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color, index) => (
  <Badge color={'soft-'+color} key={index} className="mr-2">
    {color}
  </Badge>
))`;

const softBadgesPillCode = `['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color, index) => (
  <Badge color={'soft-'+color} key={index} className="mr-2" pill>
    {color}
  </Badge>
))`;

const Badges = () => (
  <Fragment>
    <PageHeader
      title="Badges"
      description="Documentation and examples for badges, our small count and labeling component."
      className="mb-3"
    >
      <Button
        tag="a"
        href="https://reactstrap.github.io/components/alerts"
        target="_blank"
        color="link"
        size="sm"
        className="pl-0"
      >
        Badges on reactstrap
        <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
      </Button>
    </PageHeader>
    <Card className="mb-3">
      <CustomCardHeader title="Contextual variations" light={false} />
      <CardBody className="bg-light">
        <CustomEditor code={contextualCode} language="jsx" />
      </CardBody>
    </Card>
    <Card className="mb-3">
      <CustomCardHeader title="Soft badges" light={false} />
      <CardBody className="bg-light">
        <CustomEditor code={softBadgesCode} language="jsx" />
      </CardBody>
    </Card>
    <Card>
      <CustomCardHeader title="Soft pill badges" light={false} />
      <CardBody className="bg-light">
        <CustomEditor code={softBadgesPillCode} language="jsx" />
      </CardBody>
    </Card>
  </Fragment>
);

export default Badges;
