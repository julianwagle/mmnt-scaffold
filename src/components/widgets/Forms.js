import React from 'react';
import WidgetsSectionTitle from './WidgetsSectionTitle';
import { Row, Col, Button } from 'reactstrap';
import AdvanceUserForm from '../auth/wizard/AdvanceUserForm';
import AuthWizardProvider from '../auth/wizard/AuthWizardProvider';
import { useForm } from 'react-hook-form';
import AuthBasicLayoutWidgets from './AuthBasicLayoutWidgets';
import Experience from '../experience/Experience';
import PostCreateForm from '../feed/PostCreateForm';
import FeedProvider from '../feed/FeedProvider';
import Compose from '../email/Compose';
import DropZoneWidget from './DropZoneWidget';

const Forms = () => {
  const { register, errors } = useForm();

  return (
    <>
      <WidgetsSectionTitle
        icon="file-alt"
        title="Forms"
        subtitle="Get different types of data from the user by using #{theme}'s customizable form."
        transform="shrink-2"
      />
      <Row>
        <Col lg={7} className="pl-lg-2">
          <AuthBasicLayoutWidgets className="mb-3">
            <AuthWizardProvider>
              <AdvanceUserForm register={register} errors={errors} />
              <Button color="primary" className="ml-auto d-block">
                Save
              </Button>
            </AuthWizardProvider>
          </AuthBasicLayoutWidgets>
          <Experience isEditable isOpen={true} className="mb-3" />
          <FeedProvider>
            <PostCreateForm />
          </FeedProvider>
        </Col>
      </Row>
      <Compose recipientOption={{ closeMenuOnSelect: false, autoFocus: false, isMulti: true, isCreatable: true }} />
      <DropZoneWidget />
    </>
  );
};

export default Forms;
