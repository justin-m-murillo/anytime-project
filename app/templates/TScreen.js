import { View } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import Header from '../components/home/header/Header';

const TScreen = ({ children }) => {

  return (
    <View>
      <StatusBar />
      <Header />
      {children}
    </View>
  )
}

export default TScreen;