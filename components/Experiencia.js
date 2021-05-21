import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 19,
      },
});
  
export const Experiencia = ({ experiencia, onClick }) => {
    return (
        <Button
            icon="star"
            mode="text"
            uppercase={false}
            onPress={onClick}
            style={styles.item}
        >
            {experiencia.local}
        </Button>
    );
};
