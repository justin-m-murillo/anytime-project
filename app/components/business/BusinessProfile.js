import { View, Text, Image } from 'react-native';
import React from 'react';

const BusinessProfile = ({ data }) => {
  const { imgUrl, businessName, distance } = data;

  return (
    <View>
      <Image 
        source={{
          uri: imgUrl,
        }}
        className='h-48 w-48 rounded-sm'
      />
      <View>
        <Text>Title: {businessName}</Text>
      </View>
      <Text>Happy Hours</Text>
      <Text>Monday:</Text>
      <Text>8:00 AM - 12:00 PM</Text>
      <Text>Title: </Text>
    </View>
  )
}

export default BusinessProfile