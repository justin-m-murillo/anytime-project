import { 
  View,
} from 'react-native';
import React, { useState, } from 'react';

import Body from '../components/home/body/Body';


const HomeScreen = () => {
  const [features, setFeatures] = useState([1, 2, 3]);

  return (
    <View className='bg-gray-100'>
      <Body features={features} />
    </View>
  )
}

export default HomeScreen;