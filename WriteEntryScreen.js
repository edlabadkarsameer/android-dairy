// WriteEntryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, DatePicker } from 'react-native';

const WriteEntryScreen = () => {
  const [date, setDate] = useState(new Date());
  const [entry, setEntry] = useState('');

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDate(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic (e.g., save entry to Firebase)
    console.log('Date:', date);
    console.log('Entry:', entry);
    alert("added the text");
    // Add your logic to save the entry to Firebase or perform other actions
  };

  return (
    <View style={styles.container}>
      <Text>Select Date:</Text>
      <Button title="Pick a Date" onPress={showDatePicker} />

      <Text>Write your entry:</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        placeholder="Write your thoughts here..."
        value={entry}
        onChangeText={(text) => setEntry(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default WriteEntryScreen;
