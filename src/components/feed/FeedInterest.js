import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CustomCardHeader from '../common/CustomCardHeader';
import { isIterableArray } from '../../helpers/utils';
import EventSummary from '../event/EventSummary';
import CustomCardFooterLink from '../common/CustomCardFooterLink';
import useFakeFetch from '../../hooks/useFakeFetch';
import Loader from '../common/Loader';
import createMarkup from '../../helpers/createMarkup';
import rawEvents from '../../data/event/events';

const resolvedEvents = rawEvents.slice(2);

const FeedInterest = props => {
  const { loading, data: events } = useFakeFetch(resolvedEvents);

  return (
    <Card {...props}>
      <CustomCardHeader title="You may interested" titleTag="h5" />
      <CardBody className="fs--1">
        {loading ? (
          <Loader />
        ) : (
          isIterableArray(events) &&
          events.map(({ id, additional, ...rest }, index) => (
            <EventSummary {...rest} divider={events.length !== index + 1} key={id}>
              <p className="text-1000 mb-0" dangerouslySetInnerHTML={createMarkup(additional)} />
            </EventSummary>
          ))
        )}
      </CardBody>
      <CustomCardFooterLink title="All Events" to="/social/events" />
    </Card>
  );
};

export default FeedInterest;
