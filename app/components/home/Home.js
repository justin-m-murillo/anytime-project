import { 
  View, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, } from 'react';

import Header from './header/Header';
import Body from '../home/body/Body';

//import DismissKeyboard from '../../utils/dismisskeyboard';

import styles from '../../styles/homescreen';

const Home = ({ userData }) => {
  const [features, setFeatures] = useState([1, 2, 3]);

  return (
    <View>
      <StatusBar style='auto' />
      <SafeAreaView className={styles.safeAreaView}>
        <View>
          {/* Header */}
          <Header userData={userData}  />
        </View>

        <View className='bg-gray-100'>
          <ScrollView>
            <View style={{ paddingBottom: 440 }}>
              {/* Body */}
              <Body 
                features={features}
              />
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Home;