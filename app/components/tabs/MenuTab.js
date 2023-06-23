import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

import styles from '../../styles/mainstylesheet';

import MenuItem from '../../subcomponents/MenuItem';

const MenuTab = ({ happyhour, special }) => {

  return (
    <ScrollView className='mx-2'>
      <View style={{ paddingBottom: 100 }}>
        <View>
          { /* Happy Hour Deals */
            special?.map(item => (
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
        </View>
        <View>
          { /* Happy Hour Deals */
            happyhour?.map(item => (
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
        </View>
      </View>
    </ScrollView>
  )
}

export default MenuTab;