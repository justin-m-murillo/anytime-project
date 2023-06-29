import { View, Text, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import NoFavorites from '../components/favorites/NoFavorites';

const FavoritesScreen = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ fullData, setFullData ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  useEffect(() => {
    // setIsLoading(true);
    // fetchData(/* INSERT API ENDPOINT */);
  }, []);

  const fetchData = async(url) => {
    /*
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);

      console.log(json.results);
      setIsLoading(false);

    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
    */
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  if ( isLoading ) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size={'large'} color='gray' />
      </View>
    );
  }

  if ( error ) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>Error in fetching data ... Please check your internet connection</Text>
      </View>
    );
  }

  return (
    <View className='h-full mt-2 mx-2 bg-white rounded-lg'>
      <View className='flex-row'>
        <View className='flex-1 px-8 py-4'>
          <TextInput 
            className='bg-gray-200 p-3 rounded-xl'
            placeholder='Filter favorites...'
            clearButtonMode='always'
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
          />
        </View>
      </View>
      <View className='mx-4 my-2 h-0.5 bg-gray-200'></View>
      <View className='flex-1 px-2'>
        {
          data.length < 1 
            ? <NoFavorites />
            : <FlatList />
        }
      </View>
    </View>
  )
}

export default FavoritesScreen;