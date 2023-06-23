import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ImageGenerator from '../../utils/sampleImgGenerator';
import sampleBusinessData from '../../utils/sampleBusinessData';

import BusinessTabsView from './BusinessTabsView';

const Tab = createMaterialTopTabNavigator();

const BusinessProfile = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const { imgUrl, businessName, distance } = data;
  const sampleImages = [
    { id: 1, img: imgUrl,  },
    { id: 2, img: ImageGenerator(720), },
    { id: 3, img: ImageGenerator(720), },
    { id: 4, img: ImageGenerator(720), },
    { id: 5, img: ImageGenerator(720), },
  ];
  
  
  return (
    <View>
      <View className='relative'>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          {sampleImages?.map((elem) => (
            <Image
              key={elem.id} 
              source={{
                uri: elem.img,
              }}
              style={{ width: width, height: height/3 }}
            />
          ))}
        </ScrollView>
        <View className='px-1 absolute left-1 bottom-1'>
          <Text className='text-3xl font-bold text-white'>{businessName}</Text>
        </View>
      </View>
      <BusinessTabsView data={sampleBusinessData} />
    </View>
  )
}

export default BusinessProfile;