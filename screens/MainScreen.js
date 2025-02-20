import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import GlobalTimer from '../components/GlobalTimer';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadState } from '../redux/slice/timerSlice';

const Stack = createStackNavigator();

const MainScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.timer);

  // Load persisted state on mount.
  useEffect(() => {
    const loadPersistedState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('timerState');
        if (savedState) {
          dispatch(loadState(JSON.parse(savedState)));
        }
      } catch (error) {
        console.error('Error loading state from AsyncStorage', error);
      }
    };
    loadPersistedState();
  }, [dispatch]);

  // Save state whenever it changes.
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('timerState', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving state to AsyncStorage', error);
      }
    };
    saveState();
  }, [state]);

  return (
    <>
      <GlobalTimer />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainScreen;
