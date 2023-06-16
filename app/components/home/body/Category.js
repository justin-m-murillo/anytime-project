import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../../../styles/categoryrow'

const Category = ({ Icon, title }) => {
  return (
      <TouchableOpacity 
        style={styles.categoryWrapperRN}
        className={styles.categoryWrapper}
      >
        <View className={styles.icon}>{ Icon }</View>
        <Text className={styles.title}>{ title }</Text>
      </TouchableOpacity>
  )
}

export default Category