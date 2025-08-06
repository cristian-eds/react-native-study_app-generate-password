import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';

import styles from "./HomeStyles";

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  )
}

export default Home
