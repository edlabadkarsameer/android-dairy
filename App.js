// App.js
import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, RefreshControl } from 'react-native';
import HomeScreen from './HomeScreen';
import PersonScreen from './PersonScreen';

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
