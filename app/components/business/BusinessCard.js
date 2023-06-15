import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from '../../styles/businesscard'

const BusinessCard = ({ imgUrl }) => {
  return (
    <TouchableOpacity className={styles.container}>
      <Image
        source={{
          uri: imgUrl
        }}
        className={styles.image}
      />
      <Text className={styles.businessName}>Business Name</Text>
    </TouchableOpacity>
  )
}

export default BusinessCard