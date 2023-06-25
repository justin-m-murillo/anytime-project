import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ContactUs from '../components/contactus/ContactUs';

const ContactUsScreen = ({ userData }) => {
  return (
    <View>
      <StatusBar style='auto' />
      <ContactUs userData={userData} />
    </View>
  )
}

export default ContactUsScreen;