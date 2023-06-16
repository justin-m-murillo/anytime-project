import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { MapPinIcon } from 'react-native-heroicons/outline'

import styles from '../../styles/businesscard'

const BusinessCard = ({ imgUrl }) => {
  return (
    <View style={styles.shadow} className={styles.container}>
      <TouchableOpacity>
        <View className={styles.imgContainer}>
          <Image
            source={{
              uri: imgUrl
            }}
            className={styles.image}
          />
          <View className={styles.businessInfoWrapper}>
            <Text className={styles.businessName}>Business Name</Text>
            <Text className={styles.distance}>2.5 mi</Text>
          </View>
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

export default BusinessCard