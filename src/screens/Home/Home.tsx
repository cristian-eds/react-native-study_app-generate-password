import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { BatLogo } from '../../components/BatLogo/BatLogo';

import styles from "./HomeStyles";
import { BatTextInput } from '../../components/BatTextInput/BatTextInput';

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View>
        <BatTextInput />
      </View>
      <Text>
        Home works!!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home
