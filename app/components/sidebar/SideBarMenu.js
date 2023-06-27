import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useContext } from 'react';

import { DrawerItemList, } from '@react-navigation/drawer';

import styles from '../../styles/sidebarmenu';
import { UserContext } from '../../context/UserContext';
import SideBarUserDisplay from './SideBarUserDisplay';

const SideBarMenu = (props) => {
  const {
    userName,
    profileImg,
    isLoggedIn,
  } = useContext(UserContext);

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
          <DrawerItemList {...props} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SideBarMenu;