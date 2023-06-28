import { 
  View,
  Text, 
  TextInput,
  TouchableOpacity 
} from 'react-native'
import React from 'react'

import { styles } from '../../styles/login';

const LogInTab = () => {
  return (
    <View className='p-2 bg-white' style={{ width: '100%', height: '100%' }}>
      <Text className='p-2 text-lg font-bold'>Email</Text>
      <View className={styles.textInputWrapper}>
        <TextInput 
          className='h-10 p-2' 
          placeholder='Email' 
          autoCapitalize='none'
        />
      </View>
      <Text className='p-2 text-lg font-bold'>Password</Text>
      <View className={styles.textInputWrapper}>
        <TextInput 
          className='h-10 p-2' 
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry 
        />
      </View>
      <View className='flex-row items-center my-5'>
        <TouchableOpacity 
          className={styles.btnValid}
          onPress={() => {}}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row items-center'>
        <View className='flex-1 h-0.5 bg-gray-200'></View>
        <Text className='px-2 font-bold text-lg text-gray-500'>Or</Text>
        <View className='flex-1 h-0.5 bg-gray-200'></View>
      </View>
      <View className='items-center'>
        <Text className='my-2 text-base'>----- [Account Links Go Here] -----</Text>
      </View>
    </View>
  )
}

export default LogInTab;