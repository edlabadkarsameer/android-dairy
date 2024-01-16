// Import the necessary components and icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import WriteEntryScreen from './WriteEntryScreen';
import ReadEntryScreen from './ReadEntryScreen';
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
          tabBarLabel: 'Write',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-create" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Read"
        component={ReadEntryScreen}
        options={{
          tabBarLabel: 'Read',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-book" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      />
      {isSameerActive && (
        <Tab.Screen
          name="Aarya"
          component={Aaryaa}
          options={{
            tabBarLabel: 'Aarya',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" size={size} color={'#73c2be'} />
            ),
          }}
        />
      )}
      {isAaryaActive && (
        <Tab.Screen
          name="Sameer"
          component={Sameere}
          options={{
            tabBarLabel: 'Sameer',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" size={size} color={'#73c2be'} />
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
    color: '#73c2be',
  },
});

export default PersonScreen;
