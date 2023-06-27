import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar';

import styles from '../styles/mainstylesheet';

const TScreen = ({ children }) => {
  return (
    <View>
      <StatusBar style='auto' />
      <SafeAreaView className={styles.safeAreaView}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default TScreen