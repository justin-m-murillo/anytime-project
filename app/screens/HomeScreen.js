import { View, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from '../components/home/header/Header'
import SearchBar from '../components/home/header/SearchBar'

import styles from '../styles/homescreen'
import Body from '../components/home/body/Body'
import { ScrollView } from 'react-native-gesture-handler'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
    {children}
  </TouchableWithoutFeedback>
);


const HomeScreen = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    userName: 'anytime.username',
    location: 'San Jose • CA',
  })

  const [features, setFeatures] = useState([1, 2, 3])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
    
  })
  return (
    <View>
      <SafeAreaView className={styles.safeAreaView}>
        <DismissKeyboard>
          <View>

            {/* Header */}
            <Header userData={userData} />
            
            {/* SearchBar */}
            <SearchBar />
          </View>
        </DismissKeyboard>

        {/* Body */}
        <View className='bg-gray-100'>
          <ScrollView>
            <View style={{ paddingBottom: 320 }}>
              <Body features={features} />
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default HomeScreen