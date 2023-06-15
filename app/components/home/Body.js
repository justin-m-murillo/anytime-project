import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../styles/body'

import CategoryRow from './CategoryRow'

const Body = ({ categories }) => {
  return (
    <View className={styles.container}>
      {categories?.map(category => (
        <CategoryRow key={category} />
      ))}
    </View>
  )
}

export default Body