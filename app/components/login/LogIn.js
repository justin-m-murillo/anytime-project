import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../styles/login';

const LogIn = () => {
  return (
    <View className={styles.container}>
      <View className={styles.contentWrapper}>
        <Text>LogIn</Text>
      </View>
    </View>
  )
}

export default LogIn