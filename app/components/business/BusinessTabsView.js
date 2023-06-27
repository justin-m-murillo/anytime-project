import { View, useWindowDimensions } from 'react-native';
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { 
  BookOpenIcon, 
  MapPinIcon, 
  InformationCircleIcon,
  StarIcon, 
} from 'react-native-heroicons/outline';

import MenuTab from '../tabs/MenuTab';
import GeoLocationTab from '../tabs/GeoLocationTab';
import InfoTab from '../tabs/InfoTab';

const Tab = createMaterialTopTabNavigator();

const BusinessTabsView = ({data}) => {
  const height = useWindowDimensions().height;
  const activeColor = '#1e90ff';
  const inactiveColor = '#778899';
  const { 
    happyhour, 
    special, 
    businessName,
    address,
    distance,
    phoneNumber,
    website,
    email,
    photoGallery,
  } = data;

  return (
    <View style={{ height: height }}>
      <Tab.Navigator>
        {happyhour.length > 0 ?
          <Tab.Screen 
            name='Happy Hour' 
            children={() => <MenuTab deals={happyhour} />}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <BookOpenIcon 
                  color={
                    focused === true ? activeColor : inactiveColor
                  }
                />
              ),
            }}
          /> : null
        }
        {special.length > 0 ? 
          <Tab.Screen 
            name='Specials' 
            children={() => <MenuTab deals={special} />}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <StarIcon 
                  color={
                    focused === true ? activeColor : inactiveColor
                  }
                />
              ),
            }}
          /> : null
        }
        <Tab.Screen 
          name='Info'
          children={() => 
            <InfoTab 
              businessName={businessName}
              address={address}
              distance={distance}
              phoneNumber={phoneNumber}
              website={website}
              email={email}
              photoGallery={photoGallery}
            />
          }
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <InformationCircleIcon 
                color={
                  focused === true ? activeColor : inactiveColor
                }
              />
            ),
          }}
        />
        <Tab.Screen 
          name='Location' 
          children={() => <GeoLocationTab />}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <MapPinIcon 
                color={
                  focused === true ? activeColor : inactiveColor
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default BusinessTabsView;