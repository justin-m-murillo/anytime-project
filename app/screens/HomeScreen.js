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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 440 }}>
          {/* Body */}
          <Body features={features} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;