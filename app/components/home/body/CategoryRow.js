import { View, ScrollView, } from 'react-native'
import React from 'react'

import styles from '../../../styles/categoryrow'
import Category from './Category'
import FastFood from '../../../assets/fastfood.svg'

const ICON_WIDTH = 40
const ICON_HEIGHT = 40

const CategoryRow = () => {
  return (
    <View className={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Category Icon={ <FastFood width={ICON_WIDTH} height={ICON_HEIGHT} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_WIDTH} height={ICON_HEIGHT} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_WIDTH} height={ICON_HEIGHT} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_WIDTH} height={ICON_HEIGHT} /> } title={'Fast Food'} />
        <Category Icon={ <FastFood width={ICON_WIDTH} height={ICON_HEIGHT} /> } title={'Fast Food'} />
      </ScrollView>
    </View>
  )
}

export default CategoryRow