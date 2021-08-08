import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcExit, IcPerson, IcTask, ProfileDummy} from '../../assets';
import {Gap} from '../../components/atoms';

const Akun = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <Text style={styles.akun}>Akun</Text>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} />
          </View>
        </View>
        <Text style={styles.firstName}>Reza</Text>
        <Text style={styles.lastName}>Rahardian</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DataDiri')}>
          <View style={styles.dataDiri}>
            <View style={styles.icDatadiri}>
              <IcPerson />
            </View>
            <Text style={styles.text}>Data diri</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.dataDiri}>
          <View style={styles.icDatadiri}>
            <IcTask />
          </View>
          <Text style={styles.text}>Panduan</Text>
        </View>
        <View style={styles.dataDiri}>
          <View style={styles.icExit}>
            <IcExit />
            <Text style={styles.text}>Keluar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  header: {
    padding: 20,
  },
  back: {
    color: '#D32421',
  },
  akun: {
    fontSize: 20,
    color: '#2E2D98',
    fontWeight: 'bold',
    fontFamily:'Poppins-Medium'
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 100,
    height: 100,
    borderRadius: 30,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  photo: {
    marginTop: 5,
    marginBottom: 10,
    padding: 30,
  },
  firstName: {
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
  },
  lastName: {
    fontSize: 40,
    fontFamily: 'Poppins-Light',
  },
  dataDiri: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  icDatadiri: {
    borderRadius: 8,
    height: 50,
    width: 50,
    backgroundColor: '#F2F6FF',
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
  },
  icExit: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
    width: 120,
    backgroundColor: '#F2F6FF',
    justifyContent: 'space-evenly',
  },
});
