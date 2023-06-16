import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../../styles/gallerycolumn'

import GalleryItem from './GalleryItem'

const GalleryColumn = ({ item }) => {
  const temp = ['Element1', 'Element2', 'Element3',]

  return (
    <View className={styles.container}>
      {temp.map(elem => (
        <GalleryItem
          key={elem} 
          item={elem} 
          imgUrl={`https://picsum.photos/seed/${Math.random()}/500`} 
        />
      ))}
    </View>
  )
}

export default GalleryColumn