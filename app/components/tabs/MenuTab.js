import { View, FlatList } from 'react-native';
import React from 'react';

import MenuItem from '../sidebar/MenuItem';

const MenuTab = ({ deals }) => {

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