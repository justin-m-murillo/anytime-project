import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/header/Header'

const ContactUsScreen = ({ userData }) => {
  return (
    <View>
      <SafeAreaView>
        <Header userData={userData} />
        <Text>ContactUs</Text>
      </SafeAreaView>
    </View>
  )
}

export default ContactUsScreen