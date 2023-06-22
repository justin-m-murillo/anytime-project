import { View, Text } from 'react-native';
import React from 'react';

import styles from '../../../styles/gallerycolumn';

import GalleryItem from './GalleryItem';

import ImageGenerator from '../../../utils/sampleImgGenerator';

const GalleryColumn = ({ data }) => {
  const temp = [
    {
      key: 1,
      imgUrl: ImageGenerator(720),
      businessName: 'Element1',
      distance: 2.5,
    }, 
    {
      key: 2,
      imgUrl: ImageGenerator(720),
      businessName: 'Element2',
      distance: 2.5,
    },
    {
      key: 3,
      imgUrl: ImageGenerator(720),
      businessName: 'Element3',
      distance: 2.5,
    },
  ]

  return (
    <View className={styles.container}>
      {temp.map(elem => (
        <GalleryItem
          key={elem.key} 
          data={elem}
        />
      ))}
    </View>
  )
}

export default GalleryColumn;