import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUpTab = () => {
  return (
    <View className='my-2'>
      <View className='p-2 bg-white'>

        <View className='flex-row'>
          <View className='w-44 mr-1'>
            <Text className='py-2 px-1 text-lg font-bold'>First Name</Text>
            <View className='bg-gray-100 align-middle'>
              <TextInput className='h-10 p-2' placeholder='First Name' />
            </View>
          </View>
          <View className='w-44'>
            <Text className='py-2 px-1 text-lg font-bold'>Last Name</Text>
            <View className='bg-gray-100 align-middle'>
              <TextInput className='h-10 p-2' placeholder='Last Name' />
            </View>
          </View>
        </View>

        <View className='flex-row'>
          <View className='w-36 mr-1'>
            <Text className='py-2 px-1 text-lg font-bold'>Phone No.</Text>
            <View className='bg-gray-100 align-middle'>
              <TextInput className='h-10 p-2' placeholder='Phone No.' />
            </View>
          </View>
          <View className='w-52'>
            <Text className='py-2 px-1 text-lg font-bold'>Email</Text>
            <View className='bg-gray-100 align-middle'>
              <TextInput className='h-10 p-2' placeholder='Email' />
            </View>
          </View>
        </View>

        <Text className='py-2 px-1 text-lg font-bold'>Password</Text>
        <View className='bg-gray-100 align-middle'>
          <TextInput className='h-10 p-2' placeholder='Password' />
        </View>

        <Text className='py-2 px-1 text-lg font-bold'>Confirm Password</Text>
        <View className='bg-gray-100 align-middle'>
          <TextInput className='h-10 p-2' placeholder='Confirm Password' />
        </View>

        <View className='items-center my-10'>
          <TouchableOpacity className='h-10 w-20 bg-gray-200 border-2 border-gray-400 items-center justify-center rounded-md'>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpTab