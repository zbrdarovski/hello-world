import { useState } from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [name, setFirstInput] = useState('');
  const [lastName, setSecondInput] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* Title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          {`Welcome${name ? ` ${name}` : ''}${lastName ? ` ${lastName}` : ''}!`}
        </ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Input fields */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Please enter your name and lastname:
        </ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setFirstInput}
        />
        <TextInput
          style={styles.input}
          placeholder="Lastname"
          value={lastName}
          onChangeText={setSecondInput}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  stepContainer: {
    marginBottom: 8,
    gap: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff'
  }
});
