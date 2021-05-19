import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ListaExperiencias } from './ListaExperiencias';

export const Home = ({ dados }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.avatar} source={require('../imagens/avatarMasculino.jpg')} />
        <Text style={styles.texto}>Fulano de Tal</Text>
        <ListaExperiencias dados={dados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blueviolet',
  },
  avatar: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderColor: 'lightcoral',
      borderWidth: 10,
      marginBottom: 10,
  },
});
