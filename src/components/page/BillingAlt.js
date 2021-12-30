import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Row,
  Label
} from 'reactstrap';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import CustomCardHeader from '../common/CustomCardHeader';
import {
  useStripe, useElements, 
  CardNumberElement, CardExpiryElement, CardCvcElement 
} from '@stripe/react-stripe-js';
import canvasConfetti from '../common/Confetti';
import { toast } from 'react-toastify';
import updateSubscription from '../../crud/subscription/updateSubscription'
import createPayment from '../../crud/payment/createPayment';
import AppContext from '../../context/Context';

const Billing = () => {

  var {currentUser} = useContext(AppContext);

  const stripe = useStripe();
  const elements = useElements();
  
  async function newPaymentSecret(){
    var i = currentUser.displayName
    await updateSubscription(i, process.env.REACT_APP_STRIPE_DEFAULT_PRICE_ID)
    var p = await createPayment(i, process.env.REACT_APP_STRIPE_TEST_PRICE_AMOUNT)
    return p.client_secret
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    var s = await newPaymentSecret()
    const cardNumberElement = elements.getElement(CardNumberElement);
    var p = await stripe.confirmCardPayment(s, {
      payment_method: {
        card: cardNumberElement,
      }
    });
    if (p.error) {
      toast.error(`${p.error.message}`);
    } else {
      toast.success(`Successfully processed payment!`);
      canvasConfetti()
    }
  };

  const labelClass = 'ls text-uppercase text-600 font-weight-semi-bold mb-0';
  const cardClass = {
    fontWeight: '200',
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '15px',
    color: '#00d27a',
    '::placeholder': {
      color: '#2c7be5',
    },
  }

  return (
    <form onSubmit={handleSubmit}>
    <ContentWithAsideLayout
      aside={
          <Card className="h-100">
            <CustomCardHeader title="Billing" light={false} />
            <CardBody className="bg-light">

              <h5 className="d-flex justify-content-between">
                <span>Due today</span>
                <span>$0.00</span>
              </h5>
              <p className="fs--1 text-600">
                Once you start your trial, you will have 30 days to use Mysite Premium for free. After 30 days you'll be
                charged based on your selected plan.
              </p>
              <Button type="submit" color="success"  block>
                Start free trial
              </Button>
              <div className="text-center mt-2">
                <small className="d-inline-block">
                  By continuing, you are agreeing to our subscriber <Link to="#!">terms</Link> and will be charged at the end
                  of the trial.
                </small>
              </div>
            </CardBody>
          </Card>
      }
      isStickyAside={false}
    >
      <Card className="h-100">
        <CustomCardHeader title="Payment Method" titleTag="h5" />
        <CardBody>
          <Row>
            <Col className="pl-4 pr-4">
              <Row>
                <Col>
                  <Row className="align-items-center">
                    <Col>
                      <FormGroup>
                        <Label className={labelClass}>
                          {'Card Number'}
                        </Label>
                        <div className="form-control">
                          <CardNumberElement options={{style: {base: cardClass}}}/>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <FormGroup>
                        <Label className={labelClass}>
                          {'Exp. Date'}
                        </Label>
                        <div className="form-control">
                          <CardExpiryElement options={{style: {base: cardClass}}}/>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col xs={6}>
                      <FormGroup>
                        <Label className={labelClass}>
                          {'CVC'}
                        </Label>
                        <div className="form-control">
                          <CardCvcElement options={{style: {base: cardClass}}}/>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </ContentWithAsideLayout>
    </form>

  );
};

export default Billing;
