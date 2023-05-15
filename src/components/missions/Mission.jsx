import { PropTypes } from 'prop-types';
import React from 'react';

const Mission = ({
  name, description, reserved, applyMission, leaveMission, id,
}) => {
  const badge = reserved ? 'Active Member' : 'Not a member';

  const button = () => {
    if (reserved) {
      return (
        <button onClick={(i) => leaveMission(i)} id={id} className="btn-abandon" type="button">
          Leave Mission
        </button>
      );
    }
    return (
      <button onClick={(i) => applyMission(i)} id={id} className="btn-apply" type="button">
        Join Mission
      </button>
    );
  };

  return (
    <tr className="inner-table">
      <td className="inner-name">{name}</td>
      <td className="inner-description rightBottom-border">{description}</td>
      <td className="rightBottom-border badge">
        <div className={reserved ? 'center-flex active-member' : 'center-flex not-member'}>{badge}</div>
      </td>
      <td className="mission-btnContainer rightBottom-border">{button()}</td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  applyMission: PropTypes.func.isRequired,
  leaveMission: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
