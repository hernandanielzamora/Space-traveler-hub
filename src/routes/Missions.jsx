import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissData, apply, abandon } from '../redux/missions/missionsSlice';
import Mission from '../components/missions/Mission';

function Missions() {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const applyMission = (e) => {
    dispatch(apply(e.target.id, missions));
  };

  const leaveMission = (e) => {
    dispatch(abandon(e.target.id, missions));
  };

  let missionRendering;

  if (missions && missions.length > 0) {
    missionRendering = missions.map((item) => (
      <Mission
        key={item.mission_id}
        name={item.mission_name}
        id={item.mission_id}
        description={item.description}
        reserved={item.reserved}
        applyMission={applyMission}
        leaveMission={leaveMission}
      />
    ));
  }
  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchMissData());
    }
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <tr className="t-header">
          <th className="t-headerOne t-small header-txt">Missions</th>
          <th className="t-headerTwo t-large header-txt">Description</th>
          <th className="t-headerOne t-small header-txt">Status</th>
          <th className="t-headerThree t-medium header-txt" aria-label="label" />
        </tr>
        {missionRendering}
      </div>
    </>
  );
}

export default Missions;
