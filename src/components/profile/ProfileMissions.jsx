import React from 'react';
import { PropTypes } from 'prop-types';
import styles from '../../styles/Profile.module.css';

const ProfileMissions = ({ name }) => (
  <>
    <div className={styles.missionAccepted}>
      {name}
    </div>
  </>
);

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileMissions;
