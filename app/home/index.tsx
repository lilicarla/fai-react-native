import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { RoundedButton } from '@components';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 50,
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: 'contain', // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
    marginTop: 50,
    marginBottom: 30,
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

const Home: React.FC = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://citi.org.br/wp-content/uploads/2021/09/Vector-573x1024.png' }}
      style={styles.background}
    />
    <View style={styles.content}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://citi.org.br/wp-content/uploads/2021/09/image-66-1.png' }}
      />
      <Text style={styles.title}>
        &lt;Desenvolvimento /&gt;
      </Text>
      <RoundedButton text="Web" onPress={() => { console.log('botão 01'); }} />
      <RoundedButton text="Mobile" onPress={() => { console.log('botão 02'); }} />
    </View>
  </View>
);

export default Home;
