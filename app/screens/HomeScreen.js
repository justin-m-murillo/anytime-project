import React from 'react';

import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';

import Home from '../components/home/Home';
import ContactUsScreen from './ContactUsScreen';

import { 
  HomeIcon,
  EnvelopeIcon,
} from 'react-native-heroicons/solid';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
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
      drawerContent={(props) => <SideBarMenu {...props} /> /* SideBar Menu */ }
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
        children={(props) => <Home {...props} />} 
      />
      <Drawer.Screen 
        name='ContactUsScreen'
        options={{ 
          drawerLabel: 'Contact Us',
          drawerIcon: ({ focused }) => (
            <EnvelopeIcon 
              size={20} 
              color={ focused ? iconActiveColor : iconInactiveColor }
            />
          )
        }} 
        children={(props)=> <ContactUsScreen {...props} />} 
      />
    </Drawer.Navigator>
  )
}

export default HomeScreen;