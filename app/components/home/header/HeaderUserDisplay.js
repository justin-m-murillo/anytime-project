import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

import GuestIcon from '../../../../assets/guest-icon.jpg';

import styles from '../../../styles/header';

const GUEST_ICON = Image.resolveAssetSource(GuestIcon).uri;

const HeaderUserDisplay = ({
  userName, 
  location, 
  profileImg,
  isLoggedIn, 
}) => {
  return (
    <View className='flex-row'>
      {
        isLoggedIn ?
          <Image 
            source={{
              uri: profileImg
            }}
            className={styles.profileImage}
          />
        :
          <Image
            source={require('../../../../assets/guest-icon.jpg')}
            className={styles.profileImage}
          />
      }
      <View className='px-2'>
        <Text className={styles.userName}>
          {
            isLoggedIn 
            ? userName 
            : 'Hello, friend!'
          }
        </Text>
        <TouchableOpacity>
          <Text className={styles.location}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUserDisplay;