import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Akun, Beranda, ChatScreen, DataDiri, Notifikasi, Pekerjaan, Pesan, SignIn, SplashScreen} from '../pages';
import { BottomNavigator } from '../components/molecules';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>} >
      <Tab.Screen name="Beranda" component={Beranda} options={{headerShown: false}}/>
      <Tab.Screen name="Pekerjaan" component={Pekerjaan} options={{headerShown: false}}/>
      <Tab.Screen name="Pesan" component={Pesan} options={{headerShown: false}}/>
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DataDiri"
        component={DataDiri}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
