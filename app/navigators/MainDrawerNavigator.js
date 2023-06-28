import React, { useContext } from 'react';

import { UserContext } from '../context/UserContext';

import { useTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SideBarMenu from '../components/sidebar/SideBarMenu';
import HomeScreen from '../screens/HomeScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import LogInScreen from '../screens/LogInScreen';

import { 
  HomeIcon,
  AtSymbolIcon,
  HeartIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid';
import TScreen from '../templates/TScreen';


const MainDrawerNavigator = () => {
  const { colors } = useTheme();
  const iconActiveColor = colors.primary;
  const iconInactiveColor = '#d1d5db'; {/* Tailwind CSS: text-gray-300 */}

  const { isLoggedIn } = useContext(UserContext);
  
  const Drawer = createDrawerNavigator();

  const drawerScreenOptions = (label, Icon, unmountOnBlur=false) => (
    {
      drawerLabel: label,
      drawerIcon: ({ focused }) => (
        <Icon 
          size={20}
          color={ focused ? iconActiveColor : iconInactiveColor }
        />
      ),
      unmountOnBlur: unmountOnBlur,
    }
  );

  return (
    <SafeAreaProvider>
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
              children={(props) => (
                <TScreen>
                  <LogInScreen {...props}/>
                </TScreen>
              )}
            />
            : null
        }
        <Drawer.Screen 
          name='HomeScreen' 
          options={drawerScreenOptions('Home', HomeIcon)}
          children={(props) => (
            <TScreen>
              <HomeScreen {...props}/>
            </TScreen>
          )} 
        />
        {
          isLoggedIn ? 
            <Drawer.Screen 
              name='FavoritesScreen'
              options={drawerScreenOptions('Favorites', HeartIcon)}
              children={(props) => ( 
                <TScreen>
                  <FavoritesScreen {...props}/>
                </TScreen>
              )}
            />
            : null
        }
        <Drawer.Screen 
          name='ContactUsScreen'
          options={drawerScreenOptions('Contact Us', AtSymbolIcon)} 
          children={(props)=> (
            <TScreen>
              <ContactUsScreen {...props}/>
            </TScreen>
          )} 
        />
      </Drawer.Navigator>
    </SafeAreaProvider>
  )
}

export default MainDrawerNavigator;