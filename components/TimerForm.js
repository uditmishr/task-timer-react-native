import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTimer } from '../redux/slice/timerSlice';
import styles from '../style';

const TimerForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [halfwayAlert, setHalfwayAlert] = useState(false);

  const handleAddTimer = () => {
    if (!name || !duration || !category) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
    const durationSec = parseInt(duration);
    if (isNaN(durationSec) || durationSec <= 0) {
      Alert.alert('Validation Error', 'Duration must be a positive number.');
      return;
    }
    const newTimer = {
      id: Date.now().toString(),
      name,
      duration: durationSec,
      remaining: durationSec,
      category,
      status: 'Paused', // New timers start paused.
      halfwayAlert,
      halfwayNotified: false,
    };
    dispatch(addTimer(newTimer));
    setName('');
    setDuration('');
    setCategory('');
    setHalfwayAlert(false);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formLabel}>Add New Timer</Text>
      <TextInput
        style={styles.input}
        placeholder="Timer Name (e.g., Workout Timer)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration in seconds"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Category (e.g., Workout, Study)"
        value={category}
        onChangeText={setCategory}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setHalfwayAlert(!halfwayAlert)} style={styles.checkbox}>
          <Text>{halfwayAlert ? '[X]' : '[ ]'}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Enable Halfway Alert</Text>
      </View>
      <Button title="Add Timer" onPress={handleAddTimer} />
    </View>
  );
};

export default TimerForm;
