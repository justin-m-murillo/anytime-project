import { View, Text, Image, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'

import styles from '../../styles/mainstylesheet';

const MenuScreen = ({ happyhour, special }) => {
  const happyHourList = happyhour;

  const width = useWindowDimensions().width;

  return (
    <ScrollView className='p-2'>
      <View className='flex items-center'>
        <Text className={styles.appSubTitle}>Happy hour deals!</Text>
      </View>
      {happyHourList?.map(item => (
        <View 
          id={item.id} 
          className='flex-row my-1'
        >
          <Image 
            source={{
              uri: item.img,
            }}
            className='h-24 w-24 rounded-sm'
          />
          <View className='mx-2 shrink'>
            <Text>{item.menu}</Text>
            <View className='flex-row'>
              <Text className={styles.menuItemHours}>
                {item.hours}, 
              </Text>
              <Text> {item.days}</Text>
            </View>
            <View className={styles.menuItemDescContainer}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default MenuScreen;