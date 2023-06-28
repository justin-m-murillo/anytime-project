import { 
  View, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';

import Header from '../components/home/header/Header';
import Body from '../components/home/body/Body';

import styles from '../styles/homescreen';

const HomeScreen = () => {
  const [features, setFeatures] = useState([1, 2, 3]);

  return (
    <View className='bg-gray-100'>
      <Body features={features} />
    </View>
  )
}

export default HomeScreen;