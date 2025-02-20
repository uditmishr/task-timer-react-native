import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTimer } from '../redux/slice/timerSlice';
import styles from '../style';

const TimerCard = ({ timer }) => {
  const dispatch = useDispatch();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((timer.duration - timer.remaining) / timer.duration) * 100;

  return (
    <View style={styles.timerCard}>
      <Text style={styles.timerName}>{timer.name}</Text>
      <Text style={{backgroundColor:'#EAEAEA ', color:'white', padding:3, width:60, borderRadius:10, textAlign:'center'}}>{timer.category}</Text>
      <Text>Remaining: {formatTime(timer.remaining)}</Text>
      <Text>Status: {timer.status}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
      </View>
      <View style={styles.timerButtons}>
        <Button title="Start" onPress={() => dispatch(updateTimer({ id: timer.id, updates: { status: 'Running' } }))} />
        <Button title="Pause" onPress={() => dispatch(updateTimer({ id: timer.id, updates: { status: 'Paused' } }))} />
        <Button
          title="Reset"
          onPress={() =>
            dispatch(
              updateTimer({
                id: timer.id,
                updates: { remaining: timer.duration, status: 'Paused', halfwayNotified: false },
              })
            )
          }
        />
      </View>
    </View>
  );
};

export default TimerCard;
