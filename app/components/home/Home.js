import { 
  View, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';

import Header from './header/Header';
import Body from '../home/body/Body';

import styles from '../../styles/homescreen';

const Home = () => {
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

export default Home;