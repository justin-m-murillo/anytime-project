import { View, Text } from 'react-native'
import React from 'react'

const IconWrapper = ({  
  Icon,
  condition,
}) => {
  if (condition === true) {
    return (
      <View>
        <Text>IconWrapper</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>IconWrapper</Text>
      </View>
    );
  }
}

export default IconWrapper