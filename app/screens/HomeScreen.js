import React, { useState } from 'react';

import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';

import Home from '../components/home/Home';
import ContactUsScreen from './ContactUsScreen';

import { 
  HomeIcon,
  EnvelopeIcon,
} from 'react-native-heroicons/solid';

import sampleImgGenerator from '../utils/sampleImgGenerator';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const [userData, setUserData] = useState({
    userName: 'anytime.username',
    location: 'San Jose • CA',
    profileImg: sampleImgGenerator(720)
  });

  const { colors } = useTheme();
  const iconActiveColor = colors.primary;
  const iconInactiveColor = '#d1d5db'; {/* Tailwind CSS: text-gray-300 */}

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
        options={{ 
          drawerLabel: 'Home', 
          drawerIcon: ({ focused }) => (
            <HomeIcon 
              size={20}
              color={ focused ? iconActiveColor : iconInactiveColor }
            />
          )
        }}
        children={() => <Home userData={userData} />} 
      />
      <Drawer.Screen 
        name='ContactUs'
        options={{ 
          drawerLabel: 'Contact Us',
          drawerIcon: ({ focused }) => (
            <EnvelopeIcon 
              size={20} 
              color={ focused ? iconActiveColor : iconInactiveColor }
            />
          )
        }} 
        children={()=> <ContactUsScreen userData={userData} />} 
      />
    </Drawer.Navigator>
  )
}

export default HomeScreen;