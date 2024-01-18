// Import the necessary components and icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import WriteEntryScreen from './WriteEntryScreen';
import ReadEntryScreen from './ReadEntryScreen';
import UpdateEntryScreen from './UpdateEntryScreen';
import AaryaEntryScreen from './AaryaEntryScreen';
import SameerEntryScreen from './SameerEntryScreen';
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
        options={{
          tabBarLabel: 'Write',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-create" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      >
        {() => <WriteEntryScreen user={isSameerActive ? 'sameer' : 'aarya'} />}
      </Tab.Screen>

      <Tab.Screen
        name="Read"
        options={{
          tabBarLabel: 'Read',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-book" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      >
        {() => <ReadEntryScreen user={isSameerActive ? 'sameer' : 'aarya'} />}
      </Tab.Screen>
{/* 
      <Tab.Screen
        name="Update"
        
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="refresh" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      >

{() => <UpdateEntryScreen user={isSameerActive ? 'sameer' : 'aarya'} />}
      </Tab.Screen> */}
      {isSameerActive && (
        <Tab.Screen
        name="Aarya"
        options={{
          tabBarLabel: 'Aarya',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      >
        {() => <AaryaEntryScreen user={isSameerActive ? 'aarya' : 'aarya'} />}
      </Tab.Screen>
      )}
      {isAaryaActive && (
        <Tab.Screen
        name="Sameer"
        options={{
          tabBarLabel: 'Sameer',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={'#73c2be'} />
          ),
          headerShown: false,
        }}
      >
        {() => <AaryaEntryScreen user={isSameerActive ? 'sameer' : 'sameer'} />}
      </Tab.Screen>
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
