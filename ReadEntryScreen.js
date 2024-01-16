// WriteEntryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, DatePickerAndroid, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const MyComponent = () => {
    const [loaded] = useFonts({
      Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });
  
    if (!loaded) {
      return (
        // Render a loading indicator or null, depending on your preference
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }}
  
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
    if (entry.trim() === '') {
      // If entry is empty, show an alert or take appropriate action
      Alert.alert('Oh Noo 😔', 'You have not added the details.');
    } else {
      // Handle submission logic (e.g., save entry to Firebase)
      console.log('Date:', date);
      console.log('Entry:', entry);
      Alert.alert('Hurrah 🎉🥳🙌', 'Successfully added the data');
      // Add your logic to save the entry to Firebase or perform other actions
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button1, { backgroundColor: '#73c2be' }]}
        onPress={showDatePicker}
      >
        <Text style={styles.buttonText}>Pick a Date</Text>
      </TouchableOpacity>

      {/* <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View> */}

      {/* <TextInput
        style={[styles.textArea, { textAlignVertical: 'top' }]}
        multiline
        numberOfLines={90}
        placeholder="Write your thoughts here..."
        value={entry}
        onChangeText={(text) => setEntry(text)}
      /> */}

      {/* <TouchableOpacity
        style={[styles.button, { backgroundColor: '#73c2be' }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity> */}
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
  },
  button1: {
    backgroundColor: '#73c2be',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 50,
  },
  button: {
    backgroundColor: '#73c2be',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default WriteEntryScreen;
