import React, { Fragment } from 'react';
import { Button, Card, CardBody } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../common/PageHeader';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomEditor from '../common/CustomEditor';

const SpinnersExample = () => {
  const spinnerCodeExample = `function spinnerCodeExample () {
    return (
      <div>
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="info" />
        <Spinner color="light" />
        <Spinner color="dark" />
    </div>
    )
  }`;
  const growingSpinnerExample = `function growingSpinnerExample () {
    return (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
    </div>
    )
  }`;
  const spinnerSizesExample = `function spinnerSizesExample () {
    return (
      <div>
        <Spinner size="sm" color="primary" />
        <Spinner size="sm" color="secondary" />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </div>
    )
  }`;
  return (
    <Fragment>
      <PageHeader
        title="Spinners"
        description="Indicate the loading state of a component or page with Reactstrap spinners, built entirely with HTML, CSS, and no JavaScrip"
        className="mb-3"
      >
        <Button
          tag="a"
          href="https://reactstrap.github.io/components/spinners/"
          target="_blank"
          color="link"
          size="sm"
          className="pl-0"
        >
          Spinners on reactstrap
          <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
        </Button>
      </PageHeader>
      <Card className="mb-3">
        <CustomCardHeader title="Spinners" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={spinnerCodeExample} />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CustomCardHeader title="Growing Spinner" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={growingSpinnerExample} />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CustomCardHeader title="Sizes" light={false} />
        <CardBody className="bg-light">
          <CustomEditor code={spinnerSizesExample} />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default SpinnersExample;
