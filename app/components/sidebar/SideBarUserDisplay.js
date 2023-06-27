import { View, Text, Image } from 'react-native'
import React from 'react'

const SideBarUserDisplay = ({ userName, profileImg, styles }) => {
  return (
    <View className={styles.userInfoContainer}>
      <Image 
        source={{
          uri: profileImg,
        }}
        className={styles.imageContainer}
      />
      <Text className={styles.userName}>{userName}</Text>
    </View>
  )
}

export default SideBarUserDisplay;