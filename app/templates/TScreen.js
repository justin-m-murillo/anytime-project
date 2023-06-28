import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

import { StatusBar } from 'expo-status-bar';

import styles from '../styles/mainstylesheet';
import Header from '../components/home/header/Header';

const TScreen = (props) => {
  const {
    statusBarStyle,
    showSafeArea,
    showHeader,
    children
  } = props;

  return (
    <View>
      <StatusBar style={statusBarStyle} />
      {
        showSafeArea
        ?
          <SafeAreaView className={styles.safeAreaView}>
            { showHeader ? <Header /> : null }
            {children}
          </SafeAreaView>
        : 
          <>
            {children}
          </>
      }
    </View>
  )
}

TScreen.defaultProps = {
  statusBarStyle: 'auto',
  showHeader: true,
  showSafeArea: true
}

export default TScreen;