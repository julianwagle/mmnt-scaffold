import React, { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row, Progress } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../common/PageHeader';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomEditor from '../common/CustomEditor';

const basicExampleCode = `<Progress value="25" />`;

const labelExampleCode = `<Progress value="50">50%</Progress>`;

const heightExampleCode = `<Fragment>
  <Progress value="25" className="mb-3" style={{ height: '1px' }} />
  <Progress value="25" className="mb-3" style={{ height: '10px' }} />
  <Progress value="25" className="mb-3" style={{ height: '20px' }} />
</Fragment>`;

const backgroundExampleCode = `<Fragment>
  <Progress value="20" color="success" className="mb-3"/>
  <Progress value="30" className="mb-3" />
  <Progress value="45" color="warning" className="mb-3" />
  <Progress value="80" color="danger" className="mb-3" />
</Fragment>`;

const multiplebarExampleCode = `<Fragment>
  <Progress multi>
    <Progress bar value="15" />
    <Progress bar color="success" value="30" />
    <Progress bar color="info" value="25" />
    <Progress bar color="warning" value="20" />
    <Progress bar color="danger" value="5" />
  </Progress>
</Fragment>`;

const stripedExampleCode = `<Fragment>
  <Progress striped  value="20" color="success" className="mb-3"/>
  <Progress striped  value="30" className="mb-3" />
  <Progress striped  value="45" color="warning" className="mb-3" />
  <Progress striped  value="80" color="danger" className="mb-3" />
</Fragment>`;

const animatedExampleCode = `<Fragment>
  <Progress animated className="mb-3"  value={2 * 5} />
  <Progress animated className="mb-3" color="success" value="25" />
  <Progress animated className="mb-3" color="info" value={50} />
  <Progress animated className="mb-3" color="warning" value={75} />
  <Progress animated className="mb-3" color="danger" value="100" />
  <Progress multi>
    <Progress animated bar value="10" />
    <Progress animated bar color="success" value="30" />
    <Progress animated bar color="warning" value="20" />
    <Progress animated bar color="danger" value="20" />
  </Progress>
</Fragment>`;

const ProgressBar = () => {
  return (
    <Fragment>
      <PageHeader
        title="Progress"
        description="Documentation and examples for using Mysite custom progress bars featuring support for stacked bars, animated backgrounds, and text labels"
        className="mb-3"
      >
        <Button
          tag="a"
          href="https://reactstrap.github.io/components/progress"
          target="_blank"
          color="link"
          size="sm"
          className="pl-0"
        >
          Progress on reactstrap
          <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
        </Button>
      </PageHeader>
      <Row noGutters>
        <Col lg={6} className="pr-md-2 mb-3">
          <Card className="h-100">
            <CustomCardHeader title="Basic Example" light={false} />
            <CardBody className="bg-light">
              <CustomEditor code={basicExampleCode} />
            </CardBody>
          </Card>
        </Col>
        <Col lg={6} className="pl-md-2 mb-3">
          <Card className="h-100">
            <CustomCardHeader title="Label" light={false} />
            <CardBody className="bg-light">
              <CustomEditor code={labelExampleCode} />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Card className="mb-3">
        <CustomCardHeader title="Animated" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={animatedExampleCode} />
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CustomCardHeader title="Height" light={false} />
        <CardBody className="bg-light">
          <Progress value="25" style={{ height: '1px' }} />
          <CustomEditor code={heightExampleCode} language="jsx" />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CustomCardHeader title="Background" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={backgroundExampleCode} />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CustomCardHeader title="Multiple bars" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={multiplebarExampleCode} />
        </CardBody>
      </Card>
      <Card>
        <CustomCardHeader title="Striped" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={stripedExampleCode} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ProgressBar;
