import { View, Text, Image, useWindowDimensions, FlatList } from 'react-native';
import React from 'react';

import MenuItem from '../../subcomponents/MenuItem';

const MenuTab = ({ happyhour, special }) => {
  const deals = [...special, ...happyhour];

  return (
    <View style={{ flex: 1, height: '100%', width: '100%' }} className='pt-2'>
      <FlatList 
        data={deals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <MenuItem
            dealTitle={item.deal}
            dealTimes={item.times}
            dealItems={item.items}
            style={{ flex: 1 }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 300 }}
      />
    </View>
  )
}

export default MenuTab;