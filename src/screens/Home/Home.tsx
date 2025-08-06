import React from 'react'
import {  Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import styles from "./Style";

const Home = () => {
  return (
    <View style={styles.container}>
        <Text>
            Home works!!
        </Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default Home