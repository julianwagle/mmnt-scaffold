import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/Context';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rocket from '../../assets/img/illustrations/rocket.png';

import { signOut } from "firebase/auth";
import firebaseAuth from '../../firebase/authentication';

const LogoutContent = ({ titleTag: TitleTag }) => {
  var {setCurrentUser} = useContext(AppContext);
  signOut(firebaseAuth)
  .then(() => {
    setCurrentUser(null)
    toast.success(`Sucessfully signed out`);
  }).catch((error) => {
    console.log(error);
  })   
  return (
    <Fragment>
      <img className="d-block mx-auto mb-4" src={rocket} alt="shield" width={70} />
      <TitleTag>See you again!</TitleTag>
      <p>
        Thanks for using Mysite. You are <br className="d-none d-sm-block" />
        now successfully signed out.
      </p>
      {/* DB URL CHANGE */}
      <Button tag={Link} color="primary" size="sm" className="mt-3" to={`/`}>
        <FontAwesomeIcon icon="chevron-left" transform="shrink-4 down-1" className="mr-1" />
        Return to Home Page
      </Button>
    </Fragment>
  );
};

LogoutContent.propTypes = {
  layout: PropTypes.string,
  titleTag: PropTypes.string
};

LogoutContent.defaultProps = {
  titleTag: 'h4'
};

export default LogoutContent;
