import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Gap} from '../../components/atoms';
import {Button} from '../../components/atoms';
const width = Dimensions.get('screen').width / 1 - 30;

const Notif = [
  {
    id: 1,
    userName: 'Pakde Har',
    notifTime: '235/SERVIS/IX/2018',
    notifTitle: 'Start up - Mesin Ketinting',
    notifDate: '17 Mei 2021',
    userImg: require('../../assets/Dummy/pakdehar-pict.jpg'),
  },
  {
    id: 2,
    userName: 'Pakde Har',
    notifTime: '235/SERVIS/IX/2018',
    notifTitle: 'After sales service - Traktor Roda 4',
    notifDate: '17 Mei 2021',
    userImg: require('../../assets/Dummy/pakdehar-pict.jpg'),
  },
  {
    id: 3,
    userName: 'Pakde Har',
    notifTime: '235/SERVIS/IX/2018',
    notifTitle: 'Perbaikan - Filter oli mesin Ketinting',
    notifDate: '17 Mei 2021',
    userImg: require('../../assets/Dummy/pakdehar-pict.jpg'),
  },
];

const Notifikasi = ({navigation}) => {
  const Card = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('')}>
        <View style={styles.card}>
          <View style={styles.notifTime}>
            <Text>{item.notifTime}</Text>
          </View>
          <Text style={styles.title}>{item.notifTitle}</Text>
          <Text style={styles.date}>{item.notifDate}</Text>
          <View style={styles.bottomContainer}>
            <View style={styles.leftBottom}>
              <Image source={item.userImg} style={{marginRight: 9}} />
              <Text style={{fontFamily: 'Poppins-Regular'}}>
                {item.userName}
              </Text>
            </View>
            <View style={styles.button}>
              <Button text="Chat" textColor="white" />
              <Gap width={7} />
              <Button text="Terima" textColor="#2E2D98" color="#F2F6FF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <Gap height={20} />
          <Text style={styles.akun}>Notifikasi</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        contentContainerStyle={{height: '150%'}}
        numColumns={1}
        data={Notif}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Notifikasi;

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
    fontSize: 25,
    color: '#2E2D98',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  card: {
    height: 220,
    backgroundColor: 'white',
    width,
    marginHorizontal: 12,
    marginTop: 20,
    borderRadius: 12,
    elevation: 5,
  },
  notifTime: {
    height: 20,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 7,
    marginBottom: 60,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    paddingLeft: 7,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  leftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
