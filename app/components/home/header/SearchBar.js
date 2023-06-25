import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

import { 
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'

import styles from '../../../styles/searchbar';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
    {children}
  </TouchableWithoutFeedback>
);

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View className={styles.searchContainer}>
      <View className={styles.searchView}>
        <MagnifyingGlassIcon style={styles.magnifyingGlassIcon} />
        <DismissKeyboard>
          <TextInput
            className='w-72 mx-1'
            maxLength={36}
            placeholder='What are you looking for?'
            onChangeText={newInput => setSearchInput(newInput)}
            value={searchInput}
          />
        </DismissKeyboard>
      </View>
    </View>
  )
}

export default SearchBar;