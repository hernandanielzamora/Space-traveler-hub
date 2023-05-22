import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketList from './RocketList';
import { fetchingRocketsInfo } from '../../redux/rocket/RocketSlice';
import classes from './Rockets.module.css';

let saveReserve = false;
const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveReserve === false) {
      saveReserve = true;
      dispatch(fetchingRocketsInfo());
    }
  }, [dispatch]);

  return (
    <main className={classes.rockets}>
      <RocketList rockets={rockets} />
    </main>
  );
};

export default Rockets;
