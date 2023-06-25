import { View } from 'react-native';
import React from 'react';

import HeaderUser from './HeaderUser';
import SearchBar from './SearchBar';

const Header = ({ userData }) => {

  return (
    <View>
        {/* User Profile Pic, Username, and Current Location */}
        <HeaderUser userData={userData} />
        {/* Search Bar */}
        <SearchBar />
    </View>
  )
}

export default Header;