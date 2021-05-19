import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ListaExperienciasCabecalho } from './ListaExperienciasCabecalho';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export const ListaExperiencias = ({ dados }) => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={dados}
          renderItem={({item}) => <Text style={styles.item}>{item.local}</Text>}
          renderSectionHeader={({section}) => <ListaExperienciasCabecalho section={section} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}
