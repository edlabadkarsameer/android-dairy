import React from 'react';
import { Pressable, Image, Text, View, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, imageSource, buttonText }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        return { opacity: pressed ? 0.5 : 1 };
      }}>
      <View style={styles.buttonContainer}>
        <Image style={styles.image} source={imageSource} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin:5,
    alignItems: 'center',
  },
  image: {
    marginTop: -40,
    width: 150,
    height: 150,
  },
  buttonText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default CustomButton;
