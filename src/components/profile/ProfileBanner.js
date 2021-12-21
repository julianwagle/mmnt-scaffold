import React from 'react';
import { Button } from 'reactstrap';
import ItemBanner from '../item/ItemBanner';
import g from '../../assets/img/logos/g.png';
import hp from '../../assets/img/logos/hp.png';
import apple from '../../assets/img/logos/apple.png';

const ProfileBanner = () => (
  <ItemBanner>
    <ItemBanner.Header coverSrc={'https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png'} />
    <ItemBanner.Body
      name="Anthony Hopkins"
      verified
      headline="Senior Software Engineer at Technext Limited"
      location="New York, USA"
      noOfFollowers={330}
      previousJobs={[
        { institution: 'Google', src: g },
        { institution: 'Apple', src: apple },
        { institution: 'Hewlett Packard', src: hp }
      ]}
    >
      <Button color="mysite-primary" size="sm" className="px-3">
        Following
      </Button>
      <Button color="mysite-default" size="sm" className="px-3 ml-2">
        Message
      </Button>
    </ItemBanner.Body>
  </ItemBanner>
);

export default ProfileBanner;
