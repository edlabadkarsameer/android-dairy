// App.js
import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, RefreshControl } from 'react-native';
import HomeScreen from './HomeScreen';
import PersonScreen from './PersonScreen';
// import firebase from 'firebase/app';
// import 'firebase/database'; // Import the Firebase Realtime Database module

// const firebaseConfig = {
//   apiKey: "AIzaSyCZ2alxerfbtg-8FbBjhNqZDVuFoWzyX6k",
//   authDomain: "dear-diary-d5014.firebaseapp.com",
//   databaseURL: "https://dear-diary-d5014-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "dear-diary-d5014",
//   storageBucket: "dear-diary-d5014.appspot.com",
//   messagingSenderId: "513602561739",
//   appId: "1:513602561739:web:31f15bd614a0643b8cdd4e",
//   measurementId: "G-BV6Z851M7D"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="Person" options={{ headerShown: false }} component={PersonScreen} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    // Place your refresh logic here
    // For example, fetch new data from your API

    // Simulating a delay with setTimeout
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ScrollView>
  );
};


export default App;
