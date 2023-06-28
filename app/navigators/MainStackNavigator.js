import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainDrawerNavigator from './MainDrawerNavigator';
import BusinessProfile from '../components/business/BusinessProfile';

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MainDrawerNavigator'
          screenOptions={{ headerShown: false, }}
        >
              <Stack.Screen 
                name='MainDrawerNavigator'
                children={(props) => <MainDrawerNavigator {...props} />}
              />
              <Stack.Screen 
                name='BusinessProfile'
                children={(props) => <BusinessProfile {...props} />}
              />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default MainStackNavigator