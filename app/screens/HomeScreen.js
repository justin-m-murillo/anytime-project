import { View, } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from "../components/home/Home";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <View>
      <StatusBar style="auto" />
      <Home />
    </View>
  )
}

export default HomeScreen;