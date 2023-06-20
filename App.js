import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import BusinessProfile from './app/components/business/BusinessProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}

        />
        <Stack.Screen 
          name='BusinessProfile'
          component={BusinessProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
