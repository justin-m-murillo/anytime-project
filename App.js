import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserContext } from './app/context/UserContext';
import sampleImgGenerator from './app/utils/sampleImgGenerator';

import MainStackNavigator from './app/navigators/MainStackNavigator';

export default function App() {
  const test = {
    userName: 'anytime.username',
    location: 'San Jose • CA',
    profileImg: sampleImgGenerator(720),
    isLoggedIn: false,
  }

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={test}>
        <MainStackNavigator />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}
