import { View, TextInput, } from 'react-native'
import React from 'react'
import { 
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'

import styles from '../../styles/searchbar'

const SearchBar = () => {
  return (
    <View className={styles.searchContainer}>
      <View className={styles.searchView}>
        <MagnifyingGlassIcon style={styles.magnifyingGlassIcon}/>
        <TextInput
          placeholder='What are you looking for?'
          keyboardType='default'
        />
      </View>
    </View>
  )
}

export default SearchBar