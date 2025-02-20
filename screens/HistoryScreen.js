// screens/HistoryScreen.js
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../style';

const HistoryScreen = () => {
  const history = useSelector((state) => state.timer.history);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.historyTitle}>Timer History</Text>
      {history.length === 0 ? (
        <Text>No completed timers yet.</Text>
      ) : (
        history.map((record) => (
          <View key={record.id} style={styles.historyItem}>
            <Text style={styles.historyName}>{record.name}</Text>
            <Text>Completed At: {new Date(record.completedAt).toLocaleString()}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default HistoryScreen;
