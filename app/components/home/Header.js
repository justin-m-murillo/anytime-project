import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { MapPinIcon } from 'react-native-heroicons/outline'

import styles from '../../styles/header'

const Header = ({
  userData: { userName, location } 
}) => {
  return (
    <View className={styles.headerContainer}>
      <Image 
        source={{
          uri: 'https://picsum.photos/400'
        }}
        className={styles.profileImage}
      />
      <View className='w-full'>
        <Text className={styles.userName}>{userName}</Text>
        <TouchableOpacity>
          <Text className={styles.location}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header