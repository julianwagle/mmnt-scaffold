import React, { useContext } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import bg1 from '../../assets/img/generic/bg-1.png';
import dashboard from '../../assets/img/generic/saas-gif-6.gif';
import dashboardDark from '../../assets/img/generic/saas-gif-6.gif';

import Section from '../common/Section';
import AppContext from '../../context/Context';


const Banner = () => {
  const { isDark } = useContext(AppContext);

  return (
    <Section className="py-0 overflow-hidden" image={bg1} position="center bottom" overlay>
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">

        <Col md={11} lg={8} xl={4} className="pb-7 pb-xl-9 text-center text-xl-left">
          <h1 className="text-white font-weight-light">
            Bring
            <Typed
              strings={['design', 'beauty', 'elegance', 'perfection']}
              typeSpeed={40}
              backSpeed={50}
              className="font-weight-bold pl-2"
              loop
            />
            <br />
            to your webapp
          </h1>
          <p className="lead text-white opacity-75">
            With the power of Mysite, you can now focus only on functionaries for your digital products, while leaving
            the UI design on us!
          </p>
          <Link className="btn btn-outline-light border-2x rounded-pill btn-lg mt-4 fs-0 py-2" to="#!">
            Start your journey today!
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Link>
        </Col>
        <Col xl={{ size: 7, offset: 1 }} className="align-self-end">
          <Link to="/" className="img-landing-banner">
            <img className="img-fluid stretchy-gif" background-size='cover' src={isDark ? dashboardDark : dashboard} alt="" />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Banner;
