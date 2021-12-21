import React, { Fragment } from 'react';
import { Card, CardBody } from 'reactstrap';
import PageHeader from '../common/PageHeader';
import CustomCardHeader from '../common/CustomCardHeader';
import CustomEditor from '../common/CustomEditor';
import SearchBox from '../navbar/units/SearchBox';
import autoCompleteInitialItem from '../../data/autocomplete/autocomplete';

const alertCode = `function Searchbox () {
  return <SearchBox autoCompleteItem={autoCompleteInitialItem} />
}`;

const AutocompleteExample = () => (
  <Fragment>
    <PageHeader
      title="Autocomplete Search"
      description="An autocomplete search dropdown with clean and simple design."
      className="mb-3"
    />
    <Card className="mb-3">
      <CustomCardHeader title="Example" light={false} />
      <CardBody className="bg-light">
        <CustomEditor code={alertCode} scope={{ SearchBox, autoCompleteInitialItem }} language="jsx" />
      </CardBody>
    </Card>
  </Fragment>
);

export default AutocompleteExample;
