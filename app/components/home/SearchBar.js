import { View, Text, TextInput } from 'react-native'
import React from 'react'

import styles from '../../styles/searchbar'

const SearchBar = () => {
  return (
    <View className={styles.searchContainer}>
      <View className={styles.searchView}>
        <TextInput
          placeholder='What are you looking for?'
          keyboardType='default'
        />
      </View>
    </View>
  )
}

export default SearchBar