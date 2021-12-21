import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import { Button, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../common/PageHeader';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomEditor from '../common/CustomEditor';

const toastifyCode = `<ButtonGroup>
  <Button color='mysite-info' onClick={() => toast.info('Info typed toast')} >
    Info
  </Button>
  <Button color='mysite-success' onClick={() => toast.success('Success typed toast')} >
    Success
  </Button>
  <Button color='mysite-danger' onClick={() => toast.error('Error typed toast')} >
    Error
  </Button>
  <Button color='mysite-default' onClick={() => toast('Default toast')} >
    Default
  </Button>
  <Button color='mysite-warning' onClick={() => toast(
    <Fragment>
      Welcome to <strong>Mysite React</strong>!<br />
      ReactJS Dashboard and WebApp Template
    </Fragment>
  )} >
    Custom HTML
  </Button>
</ButtonGroup>`;

const Toastify = () => (
  <Fragment>
    <PageHeader
      title="React Toastify"
      description="By default, all toasts will inherit ToastContainer's props. Props defined on toast supersede ToastContainer's props. Props marked with * can only be set on the ToastContainer. The demo is not exhaustive, check the repo for more!"
      className="mb-3"
    >
      <Button
        tag="a"
        href="https://fkhadra.github.io/react-toastify"
        target="_blank"
        color="link"
        size="sm"
        className="pl-0"
      >
        React Toastify Documentation
        <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
      </Button>
    </PageHeader>
    <Card>
      <CustomCardHeader title="Example" />
      <CardBody>
        <CustomEditor code={toastifyCode} scope={{ toast }} language="jsx" />
      </CardBody>
    </Card>
  </Fragment>
);

export default Toastify;
