import { View, Text, StatusBar, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import { TabView, TabBar, TabBarItem, SceneMap } from 'react-native-tab-view';

import MenuScreen from '../tabs/MenuTab';
import GeoLocationScreen from '../tabs/GeoLocationTab';

const BusinessTabsView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Menu' },
    { key: 'second', title: 'Location' },
  ]);

  const width = useWindowDimensions().width;

  const renderScene = SceneMap({
    first: MenuScreen,
    second: GeoLocationScreen,
  });

  const renderLabel = ({ route, focused }) => {
    if (focused) {
      return (
        <Text className='my-1'>
          {route.title}
        </Text>
      );
    } else {
      return (
        <Text className='my-1 text-gray-400'>
          {route.title}
        </Text>
      );
    }
  }

  const renderTabBarItem = (props) => {
    return (
      <TabBarItem 
        {...props}
        renderLabel={renderLabel}
      />
    );
  }

  return (
    <View style={{ height: '100%' }}>
      <TabView 
        navigationState={{ index, routes }}
        renderTabBar={props => (
          <TabBar 
            {...props}
            indicatorStyle={{ backgroundColor: '#ff5b1f' }}
            style={{ backgroundColor: 'white' }}
            renderTabBarItem={renderTabBarItem}
            activeColor='#ff5b1f'
          />
        )}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width }}
        style={{
          marginTop: StatusBar.currentHeight
        }}
      />
    </View>
  );
}

export default BusinessTabsView;