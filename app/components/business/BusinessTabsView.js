import { View, Text, StatusBar, useWindowDimensions } from 'react-native';
import React, { ReactElement, useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { 
  BookOpenIcon, 
  MapPinIcon, 
  InformationCircleIcon 
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
        <Tab.Screen 
          name='Menu' 
          children={() => <MenuTab happyhour={happyhour} special={special} />}
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
        />
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