import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';

import styles from '../styles/mainstylesheet';

const MenuItem = ({ dealTitle, dealTimes, dealItems }) => {
  return (
    <View className='shrink'>
      <View className='flex items-center'>

        {/* Name of Deal, Hours, and Days */}
        <Text className='text-xl font-bold'>{dealTitle}</Text>
        <View className='mb-2'>
          {
            dealTimes?.map(time => (
              <View className='flex-row'>
                <Text className={styles.menuItemHours}>
                  {time.hours}, 
                </Text>
                <Text> {time.days}</Text>
              </View>
            ))
          }
        </View>
      </View>
      
      {/* Deal Items and corresponding Images */}
      <View>
        {
          dealItems?.map(item => (
            <View className='flex-row my-2'>
              <Image 
                source={{
                  uri: item.img,
                }}
                className='h-24 w-24 rounded-sm center'
              />
              <View className={styles.menuItemDescContainer}>
                <Text>{/* Lorem Ipsum: 32 words */}
                  {item.description}
                </Text>
              </View>
            </View>
          ))
        }
      </View>

    </View>
  )
}

export default MenuItem;