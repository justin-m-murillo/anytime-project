import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from '../../../styles/body'

import FeaturedRow from './FeaturedRow'
import CategoryRow from './CategoryRow'

import categoryList from '../../../utils/categorylist'
import Gallery from './Gallery'

const Body = ({ features }) => {
  const [categories, setCategories] = useState(categoryList)

  return (
    <View className={styles.container}>
      <CategoryRow categories={categories} />
      <FeaturedRow title={'Happy hour deals near you!'} description={'Check out local deals happening right now'} />
      <Gallery />
    </View>
  )
}

export default Body