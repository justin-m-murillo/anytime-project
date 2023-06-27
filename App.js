import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import BusinessScreen from './app/screens/BusinessScreen';

import { StackNavContext } from './app/context/StackNavContext';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <StackNavContext.Provider value={Stack}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MainScreen'
          screenOptions={{ headerShown: false, }}
        >
              <Stack.Screen 
                name='MainScreen'
                children={(props) => <MainScreen {...props} />}
              />
              <Stack.Screen 
                name='BusinessScreen'
                children={(props) => <BusinessScreen {...props} />}
              />
        </Stack.Navigator>
      </NavigationContainer>
    </StackNavContext.Provider>
  );
}
