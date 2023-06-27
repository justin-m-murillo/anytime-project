import { View } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import TScreen from '../templates/TScreen';
import BusinessProfile from '../components/business/BusinessProfile';

const BusinessScreen = ({ route, userData }) => {
  const routeData = route.params;

  return (
    <TScreen statusBarStyle={'light'} showSafeArea={false}>
      <BusinessProfile data={routeData} />
    </TScreen>
  )
}

export default BusinessScreen;