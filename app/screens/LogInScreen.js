import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import TScreen from '../templates/TScreen'
import LogIn from '../components/login/LogIn'

const LogInScreen = () => {
  return (
    <TScreen>
      <LogIn />
    </TScreen>
  )
}

export default LogInScreen