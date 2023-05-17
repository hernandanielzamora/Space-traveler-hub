import React from 'react';
import { useSelector } from 'react-redux';
import ProfileMissions from '../components/profile/ProfileMissions';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionsAccepted = missions.filter((el) => el.reserved === true);
  const renderMissions = missionsAccepted.map((el) => (
    <ProfileMissions key={el.mission_id} name={el.mission_name} />
  ));

  const Rockets = useSelector((state) => state.rockets);
  const ReservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <>
      <section className={styles.profContainer}>
        <div className={styles.profList}>
          <h2 className={styles.profTitle}>My Missions</h2>
          {missionsAccepted.length > 0 ? (
            <div className={styles.missAccepted}>{renderMissions}</div>
          ) : (
            <h3 className={styles.missAccepted}>Your Missions Log is empty.</h3>
          )}
        </div>
        <div className={styles.profList}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.profTitle}>My Rockets</th>
              </tr>
            </thead>
            <tbody>
              {ReservedRockets.length > 0 ? (
                ReservedRockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td className={styles.missionAccepted}>{rocket.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className={styles.missAccepted}>
                    You don&apos;t have reserved rockets yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Profile;
