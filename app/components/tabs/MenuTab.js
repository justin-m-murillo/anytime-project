import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

import styles from '../../styles/mainstylesheet';

import MenuItem from '../../subcomponents/MenuItem';

const MenuTab = ({ happyhour, special }) => {
  const happyHourList = happyhour;

  return (
    <ScrollView className='mx-2'>
      <View className='flex items-center'>
        <Text className={styles.appSubTitle}>Happy hour deals!</Text>
      </View>
      {
        happyHourList?.map(item => (
          <View 
            key={item.id} 
            className='flex-row my-2'
          >
            {/* Happy Hour Items Display */}
            <MenuItem 
              dealTitle={item.deal} 
              dealTimes={item.times}
              dealItems={item.items}
            />
          </View>
        ))
      }
    </ScrollView>
  )
}

export default MenuTab;