import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FastFood from '../../../assets/fastfood.svg'

import styles from '../../../styles/categoryrow'

const ICON_WIDTH = 40
const ICON_HEIGHT = 40

const Category = ({ Icon, title }) => {
  return (
    <View>
      <TouchableOpacity className={styles.categoryWrapper}>
          { Icon }
          <Text className={styles.title}>{ title }</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Category