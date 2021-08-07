import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {LogoSplash} from '../../assets';
import {Button, Gap} from '../../components/atoms';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <View style={styles.logoContainer}>
        <LogoSplash />
      </View>
      <View>
        <TextInput placeholder="No Telepon" style={styles.input} />
        <Gap height={10} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <Gap height={20} />
      <Button text="Masuk" textColor="white" onPress={()=> navigation.replace('MainApp')} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  login: {
    color: '#2E2D98',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 70,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.1,
    borderRadius: 3,
    borderColor: 'grey',
    backgroundColor: '#F2F6FF',
  },
});
