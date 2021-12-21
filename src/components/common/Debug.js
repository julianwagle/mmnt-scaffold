import React from 'react';
import PropTypes from 'prop-types';
import CustomCardHeader from './CustomCardHeader';
import { Card, CardBody } from 'reactstrap';
import CustomEditor from './CustomEditor';

function getPropsTypeOfObj(obj) {
  const keys = Object.keys(obj);
  const propsType = {};
  keys.map(
    key =>
      (propsType[key] = {
        value: obj[key],
        type: typeof obj[key]
      })
  );
  return propsType;
}

const beautify = (value, indentation = 2) => JSON.stringify(value, null, indentation);

const Debug = ({ value, title, showType, log, ui, ...rest }) => {
  const code = showType ? getPropsTypeOfObj(value) : value;
  if (log) {
    console.clear();
    console.table(code);
  }
  if (ui) {
    return (
      <Card {...rest}>
        <CustomCardHeader title={title} light={false} />
        <CardBody className="p-0 overflow-hidden">
          <CustomEditor code={beautify(code)} hidePreview language="json" />
        </CardBody>
      </Card>
    );
  }
  return null;
};

Debug.propTypes = {
  value: PropTypes.any,
  title: PropTypes.node,
  showType: PropTypes.bool,
  log: PropTypes.bool,
  ui: PropTypes.bool
};

Debug.defaultProps = {
  value: {},
  title: 'Debug',
  showType: false,
  log: false,
  ui: true
};

export default Debug;
