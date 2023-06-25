import { 
  View, 
  SafeAreaView,
  ScrollView, 
  Keyboard, 
  TouchableWithoutFeedback, 
} from 'react-native';
import React, { useState, } from 'react';

import Header from './header/Header';
import SearchBar from './header/SearchBar';

import styles from '../../styles/homescreen';
import Body from '../home/body/Body';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
    {children}
  </TouchableWithoutFeedback>
);

const Home = () => {
  const [userData, setUserData] = useState({
    userName: 'anytime.username',
    location: 'San Jose • CA',
  });

  const [features, setFeatures] = useState([1, 2, 3]);

  return (
    <View>
      <SafeAreaView className={styles.safeAreaView}>
        <DismissKeyboard>
          <View>
            {/* Header */}
            <Header userData={userData}  />
            
            {/* SearchBar */}
            <SearchBar />
          </View>
        </DismissKeyboard>

        {/* Body */}
        <View className='bg-gray-100'>
          <ScrollView>
            <View style={{ paddingBottom: 440 }}>
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