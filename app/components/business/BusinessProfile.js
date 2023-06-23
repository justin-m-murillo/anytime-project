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
  const sampleImages = [
    { id: 1, img: imgUrl,  },
    { id: 2, img: ImageGenerator(720), },
    { id: 3, img: ImageGenerator(720), },
    { id: 4, img: ImageGenerator(720), },
    { id: 5, img: ImageGenerator(720), },
  ];
  const sampleData = {
    happyhour: [
      {
        id: 1,
        img: ImageGenerator(720),
        menu: 'Happy Hour Deal1',
        hours: '3pm - 6pm',
        days: 'Mon - Thu'
      },
      {
        id: 2,
        img: ImageGenerator(720),
        menu: 'Happy Hour Deal2',
        hours: '1pm - 4pm',
        days: 'Fri - Sun'
      }
    ],
    special: [
      {
        id: 1,
        img: ImageGenerator(720),
        menu: 'Special Deal1',
        hours: 'all-day',
        days: 'Mon - Fir'
      },
    ],
    businessName: businessName,
    address: '3156 Santa Lucia Dr, Santa Clara, CA 95051',
    distance: distance,
    phoneNumber: '(123) 456-7890',
    email: 'business@gmail.com',
  };
  
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
      <BusinessTabsView data={sampleData} />
    </View>
  )
}

export default BusinessProfile;