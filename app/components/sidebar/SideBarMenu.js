import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const SideBarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

export default SideBarMenu;