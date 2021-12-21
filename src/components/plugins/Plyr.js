import React, { Fragment } from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomPlyr from '../common/CustomPlyr';
import PageHeader from '../common/PageHeader';
import CustomEditor from '../common/CustomEditor';

const mysitePlyrYoutubeCode = `<div className="rounded-soft overflow-hidden position-relative">
  <CustomPlyr videoId="bTqVqk7FSmY" type="youtube" />
</div>`;

const mysitePlyrVimeoCode = `<div className="rounded-soft overflow-hidden position-relative">
  <CustomPlyr videoId="76979871" type="vimeo" />
</div>`;

const mysitePlyrPropsCode = `CustomPlyr.propTypes = {
  videoId: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['youtube', 'vimeo']).isRequired
};`;

const Plyr = () => {
  return (
    <Fragment>
      <PageHeader
        title="Mysite Player"
        description="A simple, lightweight, accessible and customizable HTML5, YouTube and Vimeo media player that supports modern browsers."
        className="mb-3"
      >
        <Button tag="a" href="https://github.com/sampotts/plyr" target="_blank" color="link" size="sm" className="pl-0">
          Plyr Documentation
          <FontAwesomeIcon icon="chevron-right" className="ml-1 fs--2" />
        </Button>
      </PageHeader>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <CustomCardHeader title="Youtube" />
            <CardBody>
              <CustomEditor code={mysitePlyrYoutubeCode} scope={{ CustomPlyr }} language="jsx" />
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mb-3">
            <CustomCardHeader title="Vimeo" />
            <CardBody>
              <CustomEditor code={mysitePlyrVimeoCode} scope={{ CustomPlyr }} language="jsx" />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <CustomCardHeader title="Default Properties" />
            <CardBody>
              <CustomEditor code={mysitePlyrPropsCode} scope={{ CustomPlyr }} language="jsx" hidePreview />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Plyr;
