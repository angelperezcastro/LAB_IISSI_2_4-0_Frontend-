/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import React from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native';


export default function SystemInfo () {
  return (
        <View style={styles.container}>
            <Text >Platform: {Platform.OS}.</Text>
            <Text>{Platform.Version ? `Version: ${Platform.Version}` : null}</Text>
            <Text>Mode: {__DEV__ ? 'Development' : 'Production'}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

