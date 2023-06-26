import { View } from 'react-native';
import React from 'react';

import HeaderUser from './HeaderUser';
import SearchBar from './SearchBar';

const Header = () => {

  return (
    <View>
        {/* User Profile Pic, Username, and Current Location */}
        <HeaderUser />
        {/* Search Bar */}
        <SearchBar />
    </View>
  )
}

export default Header;