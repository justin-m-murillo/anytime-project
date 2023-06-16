import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import styles from '../../../styles/featuredrow'

import BusinessCard from '../../business/BusinessCard'
import { FlatList } from 'react-native-gesture-handler'

const FeaturedRow = () => {
  const [items, setItems] = useState([1,2,3,4])

  return (
    <View className={styles.container}>
      <View className={styles.category}>
        <Text className={styles.title}>Feature</Text>
        <Text className={styles.short_desc}>short description</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => <BusinessCard key={item.key} imgUrl={`https://picsum.photos/seed/${Math.random()}/500`}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default FeaturedRow