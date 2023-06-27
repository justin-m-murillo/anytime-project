import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import GuestIcon from '../../../../assets/guest-icon.jpg';

import styles from '../../../styles/header';

const GUEST_ICON = Image.resolveAssetSource(GuestIcon).uri;

const LogInLink = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => (
        navigation.navigate('LogInScreen')
      )}
    >
      <Text className='underline underline-offset-4'>Log In or Sign Up</Text>
    </TouchableOpacity>
  )
}

const HeaderUserDisplay = ({ 
  userName, 
  location, 
  profileImg,
  isLoggedIn, 
}) => {

  const navigation = useNavigation();

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
            source={{
              uri: GUEST_ICON
            }}
            className={styles.profileImage}
          />
      }
      <View className='px-2'>
        <Text className={styles.userName}>
          {isLoggedIn ? userName : <LogInLink navigation={navigation} />}
        </Text>
        <TouchableOpacity>
          <Text className={styles.location}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderUserDisplay;