import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import BusinessScreen from './app/screens/BusinessScreen';

const Stack = createStackNavigator();

// const windowDimensions = Dimensions.get('window');
// const screenDimensions = Dimensions.get('screen');

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
              name='BusinessScreen'
              component={BusinessScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
