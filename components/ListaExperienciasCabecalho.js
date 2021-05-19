import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 23,
      fontWeight: 'bold',
      backgroundColor: 'coral',
    },
});
  
export const ListaExperienciasCabecalho = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
);
