import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataDiriDummy} from '../../assets';
import {Button, Gap} from '../../components/atoms';

const Pekerjaan = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <Gap height={20} />
          <Text style={styles.pekerjaan}>Perkerjaan</Text>
        </View>
        <View style={styles.content}>
          <Button
            // text="After sales service"
            text="Perbaikan"
            color="#788798"
            textColor="#2E2D98"
          />
          <Gap height={10} />
          <Text style={styles.text}>Type Mesin</Text>
          <Text style={styles.subText}>Traktor Roda 4</Text>
          <Gap height={10} />
          <Text style={styles.text}>Nomor Mesin</Text>
          <Text style={styles.subText}>GHJ-12345</Text>
          <Gap height={10} />
          <Text style={styles.text}>Nomor Garansi</Text>
          <Text style={styles.subText}>987GHJ-2018</Text>
          <Gap height={10} />
          <Text style={styles.text}>Kerusakan</Text>
          <Text style={styles.subText}>Filter oli rusak</Text>
          <Gap height={10} />
          <Text style={styles.text}>Foto</Text>
          <ImageBackground source={DataDiriDummy} style={styles.cover} />
        </View>
        {/* <Gap height={20} />
        <View style={styles.content}>
          <Text style={styles.title}>System Kelistrikan</Text>
          <ChecklistBox tipe="Nyala api busi" />
          <ChecklistBox tipe="Kondisi dan Kerenggangan busi" />
          <ChecklistBox tipe="Kondisi Coil Mesin" />
          <ChecklistBox tipe="Kondisi Kabel dan Saklar On/OFF" />
        </View>
        <Gap height={20} />
        <View style={styles.content}>
          <Text style={styles.title}>System Mekanis dan Oli</Text>
          <ChecklistBox tipe="Kondisi Oli Mesin" />
          <ChecklistBox tipe="Recoil dan kemudahan start" />
          <ChecklistBox tipe="Kebersihan filter udara" />
          <ChecklistBox tipe="Kebersihan filter bahan bakar" />
          <ChecklistBox tipe="Kebersihan Karburator" />
          <ChecklistBox tipe="Settingan Karburator" />
          <ChecklistBox tipe="Kerenggangan klep in & ex" />
          <ChecklistBox tipe="RPM Langsam Mesin" />
          <ChecklistBox tipe="Running Test" />
        </View> */}
        <Gap height={20} />
        <View style={styles.content}>
          <Gap height={10} />
          <Text style={styles.text}>Nama</Text>
          <Text style={styles.subText}>Pakde Har</Text>
          <Gap height={10} />
          <Text style={styles.text}>Telp/HP</Text>
          <Text style={styles.subText}>081234567890</Text>
          <Gap height={10} />
          <Text style={styles.text}>Alamat</Text>
          <Text style={styles.subText}>Desa Dermo RT05/01</Text>
          <Text style={styles.subText}>Kec. Branjeng, Kab Gresik</Text>
          <Text style={styles.subText}>Jawa Timur 78909</Text>
          <Gap height={10} />
          <Text style={styles.text}>Metode Pembelian</Text>
          <Text style={styles.subText}>Tokopedia</Text>
        </View>
        <Gap height={20} />
        <View style={styles.button}>
          <Button text="Update Pekerjaan" textColor="white" />
          <Gap width={80} />
          <Button text="Tanya Pemilik" color="#FFFFFF" textColor="#2E2D98" />
        </View>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default Pekerjaan;

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
  pekerjaan: {
    fontSize: 25,
    color: '#2E2D98',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    backgroundColor: '#F2F6FF',
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: '#040505',
    fontFamily: 'Poppins-Light',
    marginLeft: 5,
  },
  subText: {
    fontSize: 18,
    color: '#040505',
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignContent: 'center',
  },
  label: {
    margin: 8,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    color: '#040505',
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  cover: {
    height: 330,
  },
});
