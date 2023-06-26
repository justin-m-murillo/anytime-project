import { View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ContactUs from '../components/contactus/ContactUs';

const ContactUsScreen = () => {
  return (
    <View>
      <StatusBar style='auto' />
      <ContactUs />
    </View>
  )
}

export default ContactUsScreen;