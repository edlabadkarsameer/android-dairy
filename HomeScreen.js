import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => navigation.navigate('Person', { name: 'Aarya' })}
          imageSource={require("./assets/laddy.png")}
          buttonText="Aarya"
        />
        <CustomButton
          onPress={() => navigation.navigate('Person', { name: 'Sameer' })}
          imageSource={require("./assets/boy.png")}
          buttonText="Sameer"
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

export default HomeScreen;

