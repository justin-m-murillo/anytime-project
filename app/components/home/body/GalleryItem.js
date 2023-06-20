import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import styles from '../../../styles/galleryitem'

const GalleryItem = ({ item, imgUrl }) => {
  return (
    <TouchableOpacity className={styles.galleryItemWrapper}>
      <Image
        source={{
          uri: imgUrl
        }}
        className={styles.image}
      />
      <View className={styles.galleryInfoWrapper}>
        <View>
          <Text className={styles.title}>{item}</Text>
          <Text className={styles.hours}>3pm - 6pm</Text>
        </View>
        <View>
          <Text className={styles.dealInfo}>
            25% off all beer on tap. Order a burger and get appetizers half-off!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GalleryItem