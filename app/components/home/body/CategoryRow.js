import { View, ScrollView, } from 'react-native'
import React from 'react'

import styles from '../../../styles/categoryrow'
import Category from './Category'

const CategoryRow = ({ categories }) => {

  return (
    <View className={styles.rowContainer}>
      <View style={styles.flexWrapper}>
        {categories?.map(category => (
          <Category key={category.title} Icon={category.icon} title={category.title} />
        ))}
      </View>
    </View>
  )
}

export default CategoryRow