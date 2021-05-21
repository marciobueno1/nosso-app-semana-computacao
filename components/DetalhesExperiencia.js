import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Title, Subheading, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    item: {
        padding: 10,
        fontSize: 19,
    },
    titulo: {
        fontSize: 30,
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 25,
        marginBottom: 10,
    },
    texto: {
        width: 350,
        fontSize: 18,
    },
});
  
export const DetalhesExperiencia = ({ tituloSecao, experiencia, onClick }) => {
    let descricao = experiencia.descricao
    console.log(descricao)
    if (descricao && descricao.replaceAll) {
        descricao = descricao.replaceAll('\n', '\n\n')
    }
    return (
        <View style={styles.container}>
            <Title style={styles.titulo}>{tituloSecao}</Title>
            <Subheading style={styles.subtitulo}>{experiencia.local}</Subheading>
            <ScrollView>
                <Text style={styles.texto}>{descricao}</Text>
            </ScrollView>
            <Button
                icon="arrow-left"
                mode="text"
                onPress={onClick}
                style={styles.item}
            >
                VOLTAR
            </Button>
        </View>
    );
};
