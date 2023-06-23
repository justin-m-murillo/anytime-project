import { View, Text, Image } from 'react-native';
import React from 'react';

const MenuItem = ({ dealTitle, dealTimes, dealItems }) => {
  return (
    <View className='shrink'>
      <Text>{dealTitle}</Text>
      <View className='flex-row'>
        {
          dealTimes?.map(time => (
            <View>
              <Text className={styles.menuItemHours}>
                {time.hours}, 
              </Text>
              <Text>{time.days}</Text>
            </View>
          ))
        }
      </View>
      
      <View className='flex-row my-4'>
        {
          dealItems?.map(item => (
            <View>
              <Image 
                source={{
                  uri: item.img,
                }}
                className='h-24 w-24 rounded-sm center'
              />
              <View className={styles.menuItemDescContainer}>
                <Text>{/* Lorem Ipsum: 32 words */}
                  {item.description}
                </Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default MenuItem;