import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react';

import GalleryColumn from './GalleryColumn';

import mainStyles from '../../../styles/mainstylesheet';

const GalleryRow = ({ title, description }) => {
  const { width, height } = useWindowDimensions();
  const parentList = [1, 2, 3, 4,];

  const baseOptions = {
    vertical: false,
    width: width*.95,
    height: width*.85,
  };

  return (
    <View className='flex-1'>
      <Text className={mainStyles.appTitle}>{title}</Text>
      <Text className={mainStyles.appShortDesc}>{description}</Text>
      {/* <FlatList
        className={mainStyles.featuredList}
        data={parentList}
        renderItem={({data}) => <GalleryColumn data={data} /> }
        horizontal
        showsHorizontalScrollIndicator={false}
      /> */}
      <Carousel
        {...baseOptions}
        loop={false}
        style={{ width: width }}
        data={parentList}
        renderItem={({data}) => <GalleryColumn data={data} />}
        scrollAnimationDuration={250}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10]
        }}
      />
    </View>
    
  )
}

export default GalleryRow