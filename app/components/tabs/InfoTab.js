import { View, Text, FlatList, Image, useWindowDimensions } from 'react-native';
import React from 'react'

import styles from '../../styles/mainstylesheet';
import imgStyles from '../../styles/featureditem';

const InfoTab = ({
  businessName,
  address,
  distance,
  phoneNumber,
  website,
  email,
  photoGallery
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View>
        <Text className={styles.appSubTitle}>{businessName}</Text>
      </View>
      <View>
        <Text className={styles.appBizDetails}>{address}</Text>
      </View>
      <View>
        <Text className={styles.appBizDetails}>{phoneNumber}</Text>
      </View>
      <View>
        <Text className={styles.appBizDetails}>{website}</Text>
      </View>
      <View>
        <Text className={styles.appBizDetails}>{email}</Text>
      </View>
      <View className='w-full items-center my-2'>
        <Text className={styles.appSubTitle}>Photos</Text>
      </View>
      <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
        <FlatList 
          data={photoGallery}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={imgStyles.shadow}>
              <Image 
                source={{
                  uri: item.img
                }}
                style={{ height: (width/3), width: (width/3) }}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 680 }}
        />
      </View>
    </View>
  )
}

export default InfoTab