import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { dados } from './dados/dados';

import { Home } from  './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home dados={dados} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blueviolet',
  },
});
