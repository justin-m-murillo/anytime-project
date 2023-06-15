import { View, Text, Image } from 'react-native'
import React from 'react'

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
      <View>
        <Text className={styles.userName}>{userName}</Text>
        <Text className={styles.location}>{location}</Text>
      </View>
    </View>
  )
}

export default Header