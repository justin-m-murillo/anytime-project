import { View, ScrollView, } from 'react-native'
import React from 'react'

import styles from '../../../styles/categoryrow'
import Category from './Category'
import FastFood from '../../../assets/fastfood.svg'

const ICON_SIZE = 48

const CategoryRow = () => {
  return (
    <View className={styles.container}>
      <View className={styles.listWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Category Icon={ <FastFood width={ICON_SIZE} height={ICON_SIZE} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_SIZE} height={ICON_SIZE} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_SIZE} height={ICON_SIZE} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_SIZE} height={ICON_SIZE} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_SIZE} height={ICON_SIZE} /> } title={'Fast Food'} />
      </View>
    </View>
  )
}

export default CategoryRow