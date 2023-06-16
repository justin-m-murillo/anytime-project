import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from '../../../styles/body'

import FeaturedRow from './FeaturedRow'
import CategoryRow from './CategoryRow'
import { ScrollView } from 'react-native-gesture-handler'

const Body = ({ features }) => {
  const [categories, setCategories] = useState([
    {key: 1, title: 'Fast Food', icon: 'faBurgerSoda'},
  ])

  return (
    <View className={styles.container}>
      <CategoryRow />
      <FeaturedRow />
    </View>
  )
}

export default Body