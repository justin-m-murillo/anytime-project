import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from '../../../styles/body'

import FeaturedRow from './FeaturedRow'
import CategoryRow from './CategoryRow'

import categoryList from '../../../utils/categorylist'
import Gallery from './GalleryRow'

const Body = ({ features }) => {
  const [categories, setCategories] = useState(categoryList)
  const [items, setItems] = useState([
    {
      id: 1, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 2, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 3, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 4, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 5, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 6, 
      businessName: 'Business Name',
      distance: 2.5
    },
    {
      id: 7, 
      businessName: 'Business Name',
      distance: 2.5
    },
  ])

  return (
    <View className={styles.container}>
      <CategoryRow categories={categories} />
      <FeaturedRow 
        title={'Happy hour deals near you!'} 
        description={'Check out local deals happening right now'} 
        items={items}
      />
      <Gallery />
    </View>
  )
}

export default Body