import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Banner,
  IcAfterSales,
  IcNotif,
  IcPerbaikan,
  IcStartup,
  LogoPt,
} from '../../assets';

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoPt />
        <TouchableOpacity onPress={()=> navigation.navigate('Notifikasi')} >
          <IcNotif />
        </TouchableOpacity>
      </View>
      <Banner />
      <View style={styles.serviceContainer}>
        <View>
          <TouchableOpacity>
            <IcStartup />
            <Text style={styles.text}>Start Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <IcAfterSales />
            <Text style={styles.text}>After Sales </Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Service
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <IcPerbaikan />
            <Text style={styles.text}>Perbaikan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    marginTop: 10,
    padding: 20,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  text: {
    marginTop: 15,
    fontWeight: 'bold',
  },
});
