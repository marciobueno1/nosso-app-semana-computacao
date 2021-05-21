import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DetalhesExperiencia } from './DetalhesExperiencia';
import { ListaExperiencias } from './ListaExperiencias';

export const Home = ({ dados }) => {
  const [selecionado, setSelecionado] = useState();
  const handleClick = ({ section, index }) => {
    console.log('--------------------------');
    console.log('section', section);
    console.log('index', index);
    console.log('--------------------------');
    setSelecionado({ section, index });
  }
  if (selecionado) {
    return (
      <DetalhesExperiencia
        tituloSecao={selecionado.section.title}
        experiencia={selecionado.section.data[selecionado.index]}
        onClick={() => setSelecionado(undefined)}
      />
    );
  }
  return (
    <View style={styles.container}>
        <Image style={styles.avatar} source={require('../imagens/avatarMasculino.jpg')} />
        <Text style={styles.texto}>Fulano de Tal</Text>
        <ListaExperiencias dados={dados} onClick={handleClick} />
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
