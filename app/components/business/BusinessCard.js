import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from '../../styles/businesscard'

const BusinessCard = ({ imgUrl }) => {
  return (
    <TouchableOpacity className={styles.container}>
      <View className={styles.imgContainer}>
        <Image
          source={{
            uri: imgUrl
          }}
          className={styles.image}
        />
        <View className={styles.businessNameContainer}>
          <Text className={styles.businessName}>Business Name</Text>
        </View>
      </View>
      <View>
          <Text>Address</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BusinessCard