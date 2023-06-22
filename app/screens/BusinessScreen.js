import { View, Text } from 'react-native';
import React from 'react';

import BusinessProfile from '../components/business/BusinessProfile';

const BusinessScreen = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View>
      <BusinessProfile data={data} />
    </View>
  )
}

export default BusinessScreen;