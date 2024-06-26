import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity ,StyleSheet} from 'react-native';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if ( password === 'admin' && email === 'Admin' ){
        router.push('(tabs)')
    }else{
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Wrong Password or Email',
        textBody: 'Kindly double check your Password or Email',
      })
    }

  };

  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    fontFamily: "Scripto2OR2v",
  },
  input: {
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginView;