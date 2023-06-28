import { View } from 'react-native';
import React from 'react';

import DismissKeyboard from '../../../utils/dismisskeyboard';

import HeaderUser from './HeaderUser';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <DismissKeyboard>
      <View>
        {/* User Profile Pic, Username, and Current Location */}
        <HeaderUser />
        {/* Search Bar */}
        <SearchBar />
      </View>
    </DismissKeyboard>
  )
}

export default Header;