import { View, Text } from 'react-native'
import React from 'react'

const NoFavorites = () => {
  const pushList = [
    'happy hour starts',
    'happy hour is starting soon',
    'happy hour deals and other specials get updated'
  ]

  return (
    <View>
      <View className='items-center'>
        <Text className='my-1'>No favorites saved.</Text>
        <Text className='my-1'>
          Add restaurants to receive <Text className='font-bold'>push notifications</Text> whenever:
        </Text>
        <View className='justify-start mx-10'>
        {pushList.map((item) => (
          <View className='flex-row'>
            <Text>- </Text>
            <Text key={item}>{item}</Text>
          </View>
        ))}
        </View>
      </View>
      
    </View>
  );
}

export default NoFavorites