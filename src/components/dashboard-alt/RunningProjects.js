import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CustomInput } from 'reactstrap';
import CustomCardFooterLink from '../common/CustomCardFooterLink';
import CustomCardHeader from '../common/CustomCardHeader';
import RunningProject from './RunningProject';

const RunningProjects = ({ projects }) => (
  <Card className="h-lg-100">
    <CustomCardHeader title="Running Projects" titleTag="h6">
      <CustomInput type="select" id="exampleCustomSelect" bsSize="sm">
        <option>Working Time</option>
        <option>Estimated Time</option>
        <option>Billable Time</option>
      </CustomInput>
    </CustomCardHeader>
    <CardBody className="py-0">
      {projects.map((project, index) => (
        <RunningProject project={project} isLast={index === projects.length - 1} key={project.id} />
      ))}
    </CardBody>
    <CustomCardFooterLink title="Show all projects" to="#!" size="sm" borderTop={false} />
  </Card>
);

RunningProjects.propTypes = { projects: PropTypes.arrayOf(RunningProject.propTypes.project).isRequired };

export default RunningProjects;
