import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    marginVertical: 15,
  }
});

const P = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export default P;