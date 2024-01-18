import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from './firebaseconfig'; // Import your Firebase configuration

const ReadEntryScreen = ({ user }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [entry, setEntry] = useState('');
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setDate(selectedDate);
      // Fetch data after selecting the date
      fetchData(selectedDate);
    }
  };

  const fetchData = async (selectedDate) => {
    try {
      const formattedDate = selectedDate.toLocaleDateString('en-GB');
      const entryRef = firebase.database().ref(`entries/${user}`).orderByChild('date').equalTo(formattedDate);
      const snapshot = await entryRef.once('value');
      const entries = snapshot.val();
      
      if (entries) {
        // Handle the entries data (e.g., update state or display in the UI)
        console.log('Entries for', formattedDate, entries);
        const fetchedEntry = entries.entry || ''; // Use a default value if entry is not present
        animateTextTyping(fetchedEntry);
      } else {
        // Handle case when no entries are found for the selected date
        console.log('No entries found for', formattedDate);
        setEntry(''); // Clear the entry state
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const animateTextTyping = (text) => {
    // Simulate typing effect by displaying characters one by one with a delay
    const typingSpeed = 50; // Adjust the typing speed as needed
    for (let i = 0; i <= text.length; i++) {
      setTimeout(() => {
        setTypedText(text.slice(0, i));
      }, i * typingSpeed);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button1, { backgroundColor: '#73c2be' }]}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.buttonText}>Pick a Date</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={showDatePicker}
        onRequestClose={() => setShowDatePicker(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Display the typing animated entry */}
      {typedText !== '' && (
        <View>
          <Text>Fetched Entry:</Text>
          <Text>{typedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    color: '#73c2be',
  },
  button1: {
    backgroundColor: '#73c2be',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#73c2be',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ReadEntryScreen;
