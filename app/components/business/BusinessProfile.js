import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ImageGenerator from '../../utils/sampleImgGenerator';
import BusinessTabsView from './BusinessTabsView';

const Tab = createMaterialTopTabNavigator();

const BusinessProfile = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const { imgUrl, businessName, distance } = data;
  const sample = [
    { id: 1, img: imgUrl, address: '1234 Santa Lucia Dr, Santa Clara, CA 95051' },
    { id: 2, img: ImageGenerator(720), address: '1234 Santa Lucia Dr, Santa Clara, CA 95051' },
    { id: 3, img: ImageGenerator(720), address: '1234 Santa Lucia Dr, Santa Clara, CA 95051' },
    { id: 4, img: ImageGenerator(720), address: '1234 Santa Lucia Dr, Santa Clara, CA 95051' },
    { id: 5, img: ImageGenerator(720), address: '1234 Santa Lucia Dr, Santa Clara, CA 95051' },
  ];

  return (
    <View className=''>
      <View className='relative'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {sample?.map((elem) => (
            <Image
              key={elem.id} 
              source={{
                uri: elem.img,
              }}
              style={{ width: width, height: height/3 }}
            />
          ))}
        </ScrollView>
        <View className='px-1 absolute left-3 bottom-3'>
          <Text className='text-3xl font-bold text-white'>{businessName}</Text>
        </View>
      </View>
      <BusinessTabsView />
    </View>
  )
}

export default BusinessProfile;