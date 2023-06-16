import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../styles/body'

import FeaturedRow from './FeaturedRow'

const Body = ({ features }) => {
  return (
    <View className={styles.container}>
      {features?.map(feature => (
        <FeaturedRow key={feature} />
      ))}
    </View>
  )
}

export default Body