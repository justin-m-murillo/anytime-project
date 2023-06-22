import { View, Text, Image, FlatList, useWindowDimensions } from 'react-native';
import React from 'react';

const BusinessProfile = ({ data }) => {
  const { width, height } = useWindowDimensions();
  const { imgUrl, businessName, distance } = data;
  const temp = [1, 2, 3, 4, 5];

  return (
    <View className=''>
      <View className='relative'>
        <FlatList
          data={temp}
          renderItem={() =>
            <Image 
              source={{
                uri: imgUrl
              }}
              style={{ width: width, height: height/3 }}
            />
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        />
        <View className='px-1 absolute left-3 bottom-3'>
          <Text className='text-3xl font-bold text-white '>{businessName}</Text>
        </View>
      </View>
      <Text>Happy Hours</Text>
      <Text>Monday:</Text>
      <Text>8:00 AM - 12:00 PM</Text>
      <Text>Title: </Text>
    </View>
  )
}

export default BusinessProfile;