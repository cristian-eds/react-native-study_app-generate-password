import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { BatLogo } from '../../components/BatLogo/BatLogo';

import styles from "./HomeStyles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <BatLogo />
      </View>
      <Text>
        Home works!!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home
