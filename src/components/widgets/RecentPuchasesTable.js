import React, { useState } from 'react';
import PurchasesTable from '../dashboard/PurchasesTable';
import CustomCardHeader from '../common/CustomCardHeader';
import { InputGroup, CustomInput, Button, Card, CardBody } from 'reactstrap';
import ButtonIcon from '../common/ButtonIcon';

const RecentPurchasesTable = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Card className="mb-3">
      <CustomCardHeader title="Recent Purchases" light={false}>
        {isSelected ? (
          <InputGroup size="sm" className="input-group input-group-sm">
            <CustomInput type="select" id="bulk-select">
              <option>Bulk actions</option>
              <option value="Refund">Refund</option>
              <option value="Delete">Delete</option>
              <option value="Archive">Archive</option>
            </CustomInput>
            <Button color="mysite-default" size="sm" className="ml-2">
              Apply
            </Button>
          </InputGroup>
        ) : (
          <>
            <ButtonIcon icon="plus" transform="shrink-3 down-2" color="mysite-default" size="sm">
              New
            </ButtonIcon>
            <ButtonIcon icon="filter" transform="shrink-3 down-2" color="mysite-default" size="sm" className="mx-2">
              Filter
            </ButtonIcon>
            <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="mysite-default" size="sm">
              Export
            </ButtonIcon>
          </>
        )}
      </CustomCardHeader>
      <CardBody className="p-0">
        <PurchasesTable setIsSelected={setIsSelected} />
      </CardBody>
    </Card>
  );
};

export default RecentPurchasesTable;
