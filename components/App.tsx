import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Profile from './Profile';
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
  }
});

const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  return (
     <ScrollView style={styles.container}>
     { 
      profiles.map(() => {
        return <Profile />
      })
     }
     </ScrollView>
  ); 
};


export default App;