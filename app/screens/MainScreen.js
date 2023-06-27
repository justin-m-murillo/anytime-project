import React, { useContext } from 'react';

import { UserContext } from '../context/UserContext';

import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';
import HomeScreen from './HomeScreen';
import ContactUsScreen from './ContactUsScreen';
import FavoritesScreen from './FavoritesScreen';
import LogInScreen from './LogInScreen';

import { 
  HomeIcon,
  AtSymbolIcon,
  HeartIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid';


const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const { colors } = useTheme();
  const iconActiveColor = colors.primary;
  const iconInactiveColor = '#d1d5db'; {/* Tailwind CSS: text-gray-300 */}

  const { isLoggedIn } = useContext(UserContext);

  const drawerScreenOptions = (label, Icon) => (
    {
      drawerLabel: label,
      drawerIcon: ({ focused }) => (
        <Icon 
          size={20}
          color={ focused ? iconActiveColor : iconInactiveColor }
        />
      )
    }
  );

  return (
    <Drawer.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ 
        headerShown: false, 
        swipeEdgeWidth: 0,
        drawerPosition: 'right',
      }}
      drawerContent={(props) => <SideBarMenu {...props} /> /* SideBar Menu */ }
    >
      {
        !isLoggedIn ? 
          <Drawer.Screen 
            name='LogInScreen'
            options={drawerScreenOptions('Log In', UserCircleIcon)}
            children={(props) => <LogInScreen {...props} />}
          />
          : null
      }
      <Drawer.Screen 
        name='HomeScreen' 
        options={drawerScreenOptions('Home', HomeIcon)}
        children={(props) => <HomeScreen {...props} />} 
      />
      {
        isLoggedIn ? 
          <Drawer.Screen 
            name='FavoritesScreen'
            options={drawerScreenOptions('Favorites', HeartIcon)}
            children={(props) => <FavoritesScreen {...props} />}
          />
          : null
      }
      <Drawer.Screen 
        name='ContactUsScreen'
        options={drawerScreenOptions('Contact Us', AtSymbolIcon)} 
        children={(props)=> <ContactUsScreen {...props} />} 
      />
    </Drawer.Navigator>
  )
}

export default MainScreen;