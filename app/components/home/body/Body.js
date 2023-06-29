import { View, FlatList, ScrollView, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

import styles from '../../../styles/body'

import FeaturedRow from './FeaturedRow'
import CategoryRow from './CategoryRow'

import categoryList from '../../../utils/categorylist'
import GalleryRow from './GalleryRow'

const Body = ({ features }) => {
  const { height } = useWindowDimensions();
  const [categories, setCategories] = useState(categoryList)
  const [items, setItems] = useState([
    {
      id: 1, 
      businessName: 'Business Name1',
      distance: 2.5
    },
    {
      id: 2, 
      businessName: 'Business Name2',
      distance: 2.5
    },
    {
      id: 3, 
      businessName: 'Business Name3',
      distance: 2.5
    },
    {
      id: 4, 
      businessName: 'Business Name4',
      distance: 2.5
    },
    {
      id: 5, 
      businessName: 'Business Name5',
      distance: 2.5
    },
    {
      id: 6, 
      businessName: 'Business Name6',
      distance: 2.5
    },
    {
      id: 7, 
      businessName: 'Business Name7',
      distance: 2.5
    },
  ])

  const itemDisplays = [
    <CategoryRow categories={categories} />,
    <FeaturedRow 
      title={'Happy hour deals near you!'} 
      description={'Check out local deals happening right now'} 
      items={items}
    />,
    <GalleryRow />,
  ]

  return (
    <View style={{ flex: 1, minHeight: height }} className={styles.container}>
      <FlatList 
        data={itemDisplays}
        renderItem={({item}) => (
          <View>
            {item}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 250 }}
      />
    </View>
  )
}

export default Body;