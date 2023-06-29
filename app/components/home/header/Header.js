import { View } from 'react-native';
import React from 'react';

import DismissKeyboard from '../../../utils/dismisskeyboard';

import HeaderUser from './HeaderUser';
import SearchBar from './SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView className='bg-white max-h-40'>
      <DismissKeyboard>
        <View>
          {/* User Profile Pic, Username, and Current Location */}
          <HeaderUser />
          {/* Search Bar */}
          <SearchBar />
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  )
}

export default Header;