import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';

import {
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import styles from '../../styles/sidebarmenu';

const SideBarMenu = (props) => {
  const { userName, profileImg } = props.userData;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View className={styles.userInfoContainer}>
          <Image 
            source={{
              uri: profileImg,
            }}
            className={styles.imageContainer}
          />
          <Text className={styles.userName}>{userName}</Text>
        </View>
        <View className={styles.drawerItemsContainer}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SideBarMenu;