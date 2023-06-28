import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from '../../../styles/featureditem';

const FeaturedItem = ({ 
    imgUrl, 
    businessName, 
    distance 
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.shadow} className={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'BusinessProfile',
          {
            imgUrl: imgUrl,
            businessName: businessName,
            distance: distance,
          }
        )}
      >
        <View className={styles.imgContainer}>
          <Image
            source={{
              uri: imgUrl
            }}
            className={styles.image}
          />
          <View className={styles.businessInfoWrapper}>
            <Text className={styles.businessName}>{businessName}</Text>
            <Text className={styles.distance}>{distance} mi</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FeaturedItem