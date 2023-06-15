import { View, Text, SafeAreaView, TextInput, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'

import styles from '../styles/homescreen'

const HomeScreen = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    userName: 'User Name',
    location: 'Current Location',
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
    
  })
  return (
    <View>
      <SafeAreaView className={styles.safeAreaView}>

        {/* Header */}
        <Header userData={userData} />
        
        {/* SearchBar */}
        <SearchBar />
        
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen