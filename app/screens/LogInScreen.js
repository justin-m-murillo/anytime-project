import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import TScreen from '../templates/TScreen'
import LogIn from '../components/login/login'

const LogInScreen = () => {
  return (
    <TScreen>
      <LogIn />
    </TScreen>
  )
}

export default LogInScreen