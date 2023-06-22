import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import mainStyles from '../../../styles/mainstylesheet'
import styles from '../../../styles/featuredrow'

import FeaturedItem from './FeaturedItem'

import ImageGenerator from '../../../utils/sampleImgGenerator';

const FeaturedRow = ({ title, description, items }) => {

  return (
    <View className={styles.container}>
      <View>
        <Text className={mainStyles.title}>{title}</Text>
        <Text className={mainStyles.shortDesc}>{description}</Text>
      </View>
      <FlatList
        className={styles.featuredList}
        data={items}
        renderItem={({item}) => 
          <FeaturedItem 
            key={item.id}
            imgUrl={ImageGenerator(720)}
            businessName={item.businessName}
            distance={item.distance}
          />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default FeaturedRow