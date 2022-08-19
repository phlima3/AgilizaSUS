import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './Pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Agiliza SUS</Text>
      <Login/>
      <StatusBar style="dark" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
