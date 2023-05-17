import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rocket/RocketSlice';
import classes from './rocketItem.module.css';

const RocketCardItem = (props) => {
  const { rocket } = props;
  const {
    images, name, description, reserved, id,
  } = rocket;

  const dispatch = useDispatch();

  const reserveClickEvent = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  return (
    <li id={id}>
      <img src={images} alt="Rocket SpaceX" />
      <div className={classes.content__left}>
        <h3 className={classes.name}>{name}</h3>

        {!reserved ? (
          <div className={classes.rocketdiv}>
            <p>{description}</p>
            <button
              id={id}
              type="button"
              onClick={(e) => reserveClickEvent(e)}
              className={classes.reserve__rocket}
            >
              Reserve Rocket
            </button>
          </div>
        ) : (
          <div className={classes.rocketdiv}>
            <div className={classes.rocket__reserved}>
              <button id={id} type="button" className={classes.reserved__btn}>
                Reserved
              </button>
              <p>{description}</p>
            </div>
            <div className={classes.action__btns}>
              <button
                id={id}
                type="button"
                onClick={reserveClickEvent}
                className={classes.cancel__reservation}
              >
                Cancel Reservation
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

RocketCardItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketCardItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketCardItem;
