import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ListaExperienciasCabecalho } from './ListaExperienciasCabecalho';
import { Experiencia } from './Experiencia';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
});

export const ListaExperiencias = ({ dados, onClick }) => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={dados}
          renderItem={({item, index, section}) => (
            <Experiencia
              experiencia={item} 
              onClick={() => onClick({ index, section })}
            />
          )}
          renderSectionHeader={({section}) => <ListaExperienciasCabecalho section={section} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}
