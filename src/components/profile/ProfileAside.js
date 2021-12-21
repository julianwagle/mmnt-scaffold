import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import EventSummary from '../event/EventSummary';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomCardFooterLink from '../common/CustomCardFooterLink';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import createMarkup from '../../helpers/createMarkup';
import { isIterableArray } from '../../helpers/utils';
import events from '../../data/event/events';
import educations from '../../data/education/educations';
import experiences from '../../data/experience/experiences';

const ProfileAside = () => {
  return (
    <Fragment>
      <Experience experiences={experiences} className="mb-3" />
      <Education educations={educations} className="mb-3" />

      {isIterableArray(events) && (
        <Card className="mb-3 mb-lg-0">
          <CustomCardHeader title="Events" />
          <CardBody className="fs--1">
            {events.slice(2).map(({ additional, ...rest }, index) => (
              <EventSummary {...rest} key={index}>
                <p className="text-1000 mb-0" dangerouslySetInnerHTML={createMarkup(additional)} />
              </EventSummary>
            ))}
          </CardBody>
          <CustomCardFooterLink title="All Events" to="/social/events" />
        </Card>
      )}
    </Fragment>
  );
};

export default ProfileAside;
