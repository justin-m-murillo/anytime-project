import { View, Text, TextInput } from 'react-native'
import React from 'react'


const LogInTab = () => {
  return (
    <View className='my-2'>
      <View className='p-2 bg-white'>
        <Text className='p-2 text-lg font-bold'>First Name</Text>
        <View className='bg-gray-50 align-middle'>
          <TextInput className='h-10 p-2' placeholder='First Name' />
        </View>
      </View>
    </View>
  )
}

export default LogInTab