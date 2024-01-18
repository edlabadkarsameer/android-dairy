import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firebase from './firebaseconfig.js';

const WriteEntryScreen = ({ user }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [entry, setEntry] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    if (!date) {
      Alert.alert('Oops! 😬', 'Please select a date before submitting.');
    } else if (entry.trim() === '') {
      Alert.alert('Oh Noo 😔', 'You have not added the details.');
    } else {
      // Format the date as dd-mm-yyyy
      const formattedDate = date.toLocaleDateString('en-GB');
  
      // Save the entry with user information to the database
      const databaseRef = firebase.database().ref(`entries/${user}`);
      const newEntryRef = databaseRef.push();
      newEntryRef.set({
        date: formattedDate,
        entry,
      });
  
      console.log('Date:', formattedDate);
      console.log('Entry:', entry);
      Alert.alert('Hurrah 🎉🥳🙌', 'Successfully added the data');
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

      <TextInput
        style={[styles.textArea, { textAlignVertical: 'top' }]}
        multiline
        numberOfLines={90}
        placeholder="Write your thoughts here..."
        value={entry}
        onChangeText={(text) => setEntry(text)}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#73c2be' }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
  textArea: {
    height: 525,
    borderColor: '#73c2be',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#B9E0DE',
    fontSize: 18,
    borderRadius: 25,
    // fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#73c2be',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#73c2be',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderRadius: 25,
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

export default WriteEntryScreen;
