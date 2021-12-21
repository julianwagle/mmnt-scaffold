import React, { Fragment } from 'react';
import ContentWithAsideLayout from '../../layouts/ContentWithAsideLayout';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import SettingsAccount from '../Settings/SettingsAccount';
import SettingsBilling from '../Settings/SettingsBilling';
import SettingsDangerZone from '../Settings/SettingsDangerZone';
import SettingsProfile from '../Settings/SettingsProfile';
import ItemBanner from '../item/ItemBanner';

import experiences from '../../data/experience/experiences';
import educations from '../../data/education/educations';

const SettingsAside = () => (
  <Fragment>
    <SettingsAccount />
    <SettingsBilling />
    <SettingsDangerZone />
  </Fragment>
);

const SettingsBanner = () => (
  <ItemBanner>
    <ItemBanner.Header coverSrc={'https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png'} isEditable />
  </ItemBanner>
);

const SettingsContent = () => (
  <Fragment>
    <SettingsProfile />
    <Experience experiences={experiences} isEditable className="mb-3" />
    <Education educations={educations} isEditable className="mb-3 mb-lg-0" />
  </Fragment>
);

const Settings = () => {
  return (
    <ContentWithAsideLayout banner={<SettingsBanner />} aside={<SettingsAside />}>
      <SettingsContent />
    </ContentWithAsideLayout>
  );
};

export default Settings;
