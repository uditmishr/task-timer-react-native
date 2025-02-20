import React, { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateTimer, addHistory } from '../redux/slice/timerSlice';

const GlobalTimer = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state) => state.timer.timers);
  const timersRef = useRef(timers);
  timersRef.current = timers; // Always keep the latest timers

  useEffect(() => {
    const interval = setInterval(() => {
      timersRef.current.forEach((timer) => {
        if (timer.status === 'Running') {
          let newRemaining = timer.remaining - 1;
          if (newRemaining <= 0) {
            newRemaining = 0;
            dispatch(updateTimer({ id: timer.id, updates: { remaining: newRemaining, status: 'Completed' } }));
            dispatch(addHistory({ id: timer.id, name: timer.name, completedAt: new Date().toISOString() }));
            // Optionally, show a modal for completion.
          } else {
            if (timer.halfwayAlert && !timer.halfwayNotified && newRemaining <= timer.duration / 2) {
              Alert.alert('Halfway Alert', `Timer "${timer.name}" is halfway done!`);
              dispatch(updateTimer({ id: timer.id, updates: { halfwayNotified: true } }));
            }
            dispatch(updateTimer({ id: timer.id, updates: { remaining: newRemaining } }));
          }
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};

export default GlobalTimer;
