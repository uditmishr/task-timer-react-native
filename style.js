// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Base container styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Light theme background.
  },
  darkContainer: {
    backgroundColor: '#333', // Dark theme background.
  },
  content: {
    flex: 1,
    padding: 16,
  },

  // Timer form styles
  formContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
  },

  // Timer list and card styles
  timerListContainer: {
    marginTop: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bulkActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  timerCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    marginBottom: 10,
  },
  timerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#76c7c0',
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  // History screen styles
  navigationButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  historyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // HomeScreen additional styles
  noTimersText: {
    fontSize: 16,
    textAlign: 'center',
  },
  darkText: {
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius:10,
    padding:5,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9', 
  },
  darkBottomNav:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius:10,
    padding:5,
    borderColor: '#ccc',
    backgroundColor:'#999',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  navText: {
    fontSize: 14,
    color: '#000',
  },
  picker: {
    width: 100,
    height: 50,
    position: "fixed"
  },
  darkPicker: {
    color: '#fff',
    backgroundColor: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent backdrop.
  },
  modalContent: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 5,
  },
  darkModalContent: {
    backgroundColor: '#444',
  },
});
