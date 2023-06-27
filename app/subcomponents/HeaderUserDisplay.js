import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles/header';

const HeaderUserDisplay = ({ userName, location, profileImg }) => {
  return (
    <View className='flex-row'>
      <Image 
        source={{
          uri: profileImg
        }}
        className={styles.profileImage}
      />
      <View className='px-2'>
        <Text className={styles.userName}>{userName}</Text>
        <TouchableOpacity>
          <Text className={styles.location}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUserDisplay;