import 'react-native-gesture-handler';
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
      <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{ headerShown: false, }}
      >
            <Stack.Screen 
              name='HomeScreen' 
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
