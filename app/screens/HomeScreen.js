import { View, } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../components/home/Home";
import ContactUsScreen from './ContactUsScreen';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const [userData, setUserData] = useState({
    userName: 'anytime.username',
    location: 'San Jose • CA',
  });

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{ 
        headerShown: false, 
        swipeEdgeWidth: 0,
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen 
        name='Home' 
        children={() => <Home userData={userData} />} 
      />
      <Drawer.Screen 
        name='ContactUs' 
        children={()=> <ContactUsScreen userData={userData} />} 
      />
    </Drawer.Navigator>
  )
}

export default HomeScreen;