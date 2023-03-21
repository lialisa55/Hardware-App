import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_400Regular,
  Bungee_400Regular,
  Graduate_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
    let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    Bungee_400Regular,
    Graduate_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componentes de Hardware</Text>
      <FlatList
        data={arrayHardware}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.subtitle}>{item.nome}</Text>
            <Text style={styles.subtitle}>({item.ano})</Text>
            <Text style={styles.paragraph}> {item.descricao} </Text>
            <Image style={styles.img} source={item.capa} />
          </View>
        )}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Bungee_400Regular',
  },
    subtitle: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Graduate_400Regular',
  },
    paragraph: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'JetBrainsMono_400Regular',
  },
  img: {
    width: 300,
    height: 200,
    margin: 50,
  },

});

const arrayHardware = [
  {
    nome: 'Placa mãe',
    ano: '1982',
    descricao:
      'Uma placa-mãe é a placa de circuito impresso principal (PCB) em computadores de uso geral e outros sistemas expansíveis. Ele contém e permite a comunicação entre muitos dos componentes eletrônicos cruciais de um sistema, como a unidade central de processamento (CPU) e a memória, além de fornecer conectores para outros periféricos.',
    capa: require('./assets/placa_mae.png'),
  },
  {
    nome: 'Disco rígido',
    ano: '1956',
    descricao:
      'Uma unidade de disco rígido (HDD) é um dispositivo de armazenamento de dados eletromecânico que armazena e recupera dados digitais usando armazenamento magnético e um ou mais pratos rígidos de rotação rápida revestidos com material magnético.',
    capa: require('./assets/disco_rigido.png'),
  },
  {
    nome: 'Placa de vídeo',
    ano: '1961',
    descricao:
      'Placa de vídeo é uma placa de expansão que gera uma saída de alimentação de imagens para um dispositivo de exibição (como um monitor de computador).',
    capa: require('./assets/placa_de_video.png'),
  },
  {
    nome: 'Microprocessador',
    ano: '1971',
    descricao:
      'O microprocessador é um circuito integrado que realiza as funções de cálculo e tomada de decisão de um computador.',
    capa: require('./assets/microprocessador.png'),
  },
];
