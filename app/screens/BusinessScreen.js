import { View } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import BusinessProfile from '../components/business/BusinessProfile';

const BusinessScreen = ({ route }) => {
  const data = route.params;

  return (
    <View>
      <StatusBar style="light" />
      <BusinessProfile data={data} />
    </View>
  )
}

export default BusinessScreen;