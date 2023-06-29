import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LogInTab from '../components/tabs/LogInTab';
import SignUpTab from '../components/tabs/SignUpTab';

import { styles } from '../styles/login';

const Tab = createMaterialTopTabNavigator();

const LogIn = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View 
      style={{
        width: width,
        height: height
      }} 
      className={styles.container}
    >
      <View className={styles.contentWrapper}>
        <View className={styles.welcomeWrapper}>
          <Text className='text-2xl font-bold'>Welcome!</Text>
          <Text className='my-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
      </View>
      <View className='flex-1 mx-2 bg-gray-50 rounded-lg'>
        <Tab.Navigator 
          className='rounded-md'
          initialRouteName='Log In'  
        >
          <Tab.Screen 
            name='Log In'
            children={() => <LogInTab />}
          />
          <Tab.Screen 
            name='Sign Up'
            children={() => <SignUpTab />}
          />
        </Tab.Navigator>
      </View>
    </View>
  )
}

export default LogIn;