import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';

import Home from '../components/home/Home';
import ContactUsScreen from './ContactUsScreen';

import sampleImgGenerator from '../utils/sampleImgGenerator';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const [userData, setUserData] = useState({
    userName: 'anytime.username',
    location: 'San Jose • CA',
    profileImg: sampleImgGenerator(720)
  });

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{ 
        headerShown: false, 
        swipeEdgeWidth: 0,
        drawerPosition: 'right',
      }}
      drawerContent={(props) => <SideBarMenu {...props} userData={userData} />}
    >
      <Drawer.Screen 
        name='Home' 
        options={{ drawerLabel: 'Home' }}
        children={() => <Home userData={userData} />} 
      />
      <Drawer.Screen 
        name='ContactUs'
        options={{ drawerLabel: 'Contact Us' }} 
        children={()=> <ContactUsScreen userData={userData} />} 
      />
    </Drawer.Navigator>
  )
}

export default HomeScreen;