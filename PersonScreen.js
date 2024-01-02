// Import the necessary components and icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import WriteEntryScreen from './WriteEntryScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import the icon library




const ReadScreen = () => (
  <View style={styles.container}>
    <Text>Read your entries here</Text>
  </View>
);

const Sameere = () => (
  <View style={styles.container}>
    <Text>Sameer's entries here</Text>
  </View>
);

const Aaryaa = () => (
  <View style={styles.container}>
    <Text>Aarya's entries here</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const PersonScreen = ({ route }) => {
  const { name } = route.params;

  // Determine if Sameer is the active user
  const isSameerActive = name.toLowerCase() === 'sameer';
  const isAaryaActive = name.toLowerCase() === 'aarya';
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Write"
        component={WriteEntryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={ReadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      {isSameerActive && (
        <Tab.Screen
          name="Aarya"
          component={Aaryaa}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      )}
      {isAaryaActive && (
        <Tab.Screen
          name="Sameer"
          component={Sameere}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonScreen;
