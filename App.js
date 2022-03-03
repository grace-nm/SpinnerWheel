import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SpinWheel from './SpinWheel';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Who is leading scrum today?...</Text>
      <StatusBar style="auto" />
      <SpinWheel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
    marginTop: 40,
  },
});


