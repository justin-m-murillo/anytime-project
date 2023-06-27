import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native';
import React, { useContext } from 'react';

import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { HomeIcon } from 'react-native-heroicons/solid';

import styles from '../../styles/sidebarmenu';
import { UserContext } from '../../context/UserContext';
import SideBarUserDisplay from './SideBarUserDisplay';

const SideBarMenu = (props) => {
  const {
    userName,
    profileImg,
    isLoggedIn,
  } = useContext(UserContext);

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          {
            isLoggedIn ?
              <SideBarUserDisplay
                userName={userName}
                profileImg={profileImg}
                styles={styles}
              />
            : null
          }
        </View>
        <View className={styles.drawerItemsContainer}>
          <View>
            <DrawerItemList {...props} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SideBarMenu;