import { View, SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import BusinessProfile from '../components/business/BusinessProfile';

const BusinessScreen = ({ route, navigation }) => {
  const data = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View>
      <StatusBar style="light" />
      <BusinessProfile data={data} />
    </View>
  )
}

export default BusinessScreen;