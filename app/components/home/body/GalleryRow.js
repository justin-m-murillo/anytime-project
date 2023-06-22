import { View, Text, FlatList } from 'react-native';
import React from 'react';

import GalleryColumn from './GalleryColumn';

import styles from '../../../styles/gallery';
import mainStyles from '../../../styles/mainstylesheet';

const GalleryRow = ({ title, description }) => {
  const parentList = [1, 2, 3, 4,];

  return (
    <View className={styles.container}>
      <Text className={mainStyles.title}>Deals starting soon!</Text>
      <Text className={mainStyles.shortDesc}>Don't miss out on a great time</Text>
      <FlatList
        className={mainStyles.featuredList}
        data={parentList}
        renderItem={({item}) => <GalleryColumn item={item} /> }
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
    
  )
}

export default GalleryRow