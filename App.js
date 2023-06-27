import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './app/screens/MainScreen';
import BusinessScreen from './app/screens/BusinessScreen';

import { UserContext } from './app/context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  const user = useContext(UserContext);

  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
}
