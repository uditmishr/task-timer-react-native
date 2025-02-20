// screens/HomeScreen.js
import React, { use, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import {toggleTheme} from '../redux/slice/themeSlice'

import TimerCard from '../components/TimerCard';
import TimerForm from '../components/TimerForm';
import styles from '../style';

const HomeScreen = ({ navigation }) => {
  const timers = useSelector((state) => state.timer.timers);
  const theme = useSelector((state)=> state.theme.theme);

  const [selectedGroup, setSelectedGroup] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);

  const categories = ['All', ...new Set(timers.map((timer) => timer.category))];
  const [pickerVisible, setPickerVisible] = useState(false);
  const dispatch = useDispatch();

  const filteredTimers =
    selectedGroup === 'All'
      ? timers
      : timers.filter((timer) => timer.category === selectedGroup);

  return (
    <SafeAreaView
      style={[
        styles.container,
        theme === 'dark' && styles.darkContainer, // Apply dark theme if selected.
      ]}
    >
      {/* Main content area (not scrollable) */}
      <View style={styles.content}>
        {filteredTimers.length === 0 ? (
          <Text style={[styles.noTimersText, theme === 'dark' && styles.darkText]}>
            No timers found.
          </Text>
        ) : (
          filteredTimers.map((timer) => <TimerCard key={timer.id} timer={timer} />)
        )}
      </View>

      <View style={ theme === 'light'? styles.bottomNav : styles.darkBottomNav}>
        <View style={styles.navItem}>
          <TouchableOpacity onPress={() => setPickerVisible(!pickerVisible)}>
          {!pickerVisible && (
          <Text style={theme === "light" ? styles.navText :styles.darkText}>Filter: {selectedGroup}</Text>
        )}
          </TouchableOpacity>
          {pickerVisible && (
            <Picker
              selectedValue={selectedGroup}
              style={styles.picker}
              onValueChange={(itemValue) => {
                setSelectedGroup(itemValue);
                setPickerVisible(false);
              }}
            >
              {categories.map((category) => (
                <Picker.Item key={category} label={category} value={category} />
              ))}
            </Picker>
          )}
        </View>

        <TouchableOpacity style={styles.navButton} onPress={() => setModalVisible(true)}>
          <Text style={[styles.navText, theme === 'dark' && styles.darkText]}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('History')}>
          <Text style={[styles.navText, theme === 'dark' && styles.darkText]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={()=>dispatch(toggleTheme())}
        >
          <Text style={[styles.navText, theme === 'dark' && styles.darkText]}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, theme === 'dark' && styles.darkModalContent]}>
            <TimerForm />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;