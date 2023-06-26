import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import BusinessScreen from './app/screens/BusinessScreen';

import { UserContext } from './app/context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  const user = useContext(UserContext);
  console.log(user.profileImg);

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={{ headerShown: false, }}
        >
              <Stack.Screen 
                name='HomeScreen'
                children={(props) => <HomeScreen {...props} />}
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
