import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoSplash} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn')
    },2000)
  },[])
  return (
    <View style={styles.container}>
      <LogoSplash />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
