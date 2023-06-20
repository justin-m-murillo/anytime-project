import { View, Text } from 'react-native'
import React from 'react'

import FeaturedItem from '../components/home/body/FeaturedItem'

const BusinessScreen = ({ businessName }) => {
  return (
    <View>
      <FeaturedItem businessName={businessName} />
    </View>
  )
}

export default BusinessScreen