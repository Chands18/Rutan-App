import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataDiriDummy} from '../../assets';
import {Gap} from '../../components/atoms';

const DataDiri = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={DataDiriDummy} style={styles.cover}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <Text style={styles.name}>Reza Rahardian</Text>
          <Gap height={20} />
          <Text style={styles.title}>No. ID</Text>
          <Text style={styles.subtitle}>03-8568-00</Text>
          <Gap height={20} />
          <Text style={styles.title}>Telp</Text>
          <Text style={styles.subtitle}>081234567890</Text>
          <Gap height={20} />
          <Text style={styles.title}>Cabang</Text>
          <Text style={styles.subtitle}>Makassar</Text>
        </View>
      </View>
    </View>
  );
};

export default DataDiri;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    color: '#D32421',
    paddingTop: 26,
    paddingLeft: 22,
  },
  cover: {
    height: 330,
  },
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -30,
    backgroundColor: '#F2F6FF',
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    padding: 20,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
