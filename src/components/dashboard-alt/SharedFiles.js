import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody } from 'reactstrap';
import CustomCardHeader from '../common/CustomCardHeader';
import { Link } from 'react-router-dom';
import { isIterableArray } from '../../helpers/utils';
import SharedFile from './SharedFile';

const SharedFiles = ({ files }) => {
  return (
    <Card className="h-lg-100">
      <CustomCardHeader title="Shared Files" titleTag="h6" className="py-2">
        <Button color="link" size="sm" className="pr-0 fs--1" tag={Link} to="#!">
          View All
        </Button>
      </CustomCardHeader>
      <CardBody className="pb-0">
        {isIterableArray(files) &&
          files.map((file, index) => <SharedFile key={file.id} file={file} isLast={index === files.length - 1} />)}
      </CardBody>
    </Card>
  );
};

SharedFiles.propTypes = { files: PropTypes.arrayOf(PropTypes.shape(SharedFile.propsType)).isRequired };

export default SharedFiles;
