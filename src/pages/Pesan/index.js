import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  Container,
  Card,
  UserImgWrapper,
  UserInfo,
  UserImg,
  TextSection,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
} from '../../styles/MessagesStyle';

const Messages = [
  {
    id: 1,
    userName: 'Pakde Har',
    userImg: require('../../assets/Dummy/pakdehar-pict.jpg'),
    messageTime: 'Mei 20',
    messageText: 'Hey there, this is my new app checkout this app',
  },
  {
    id: 2,
    userName: 'Senandung Nacita',
    userImg: require('../../assets/Dummy/nacita-pict.jpg'),
    messageTime: 'Mei 20',
    messageText: 'Hey there, this is my new app checkout this app',
  },
  {
    id: 3,
    userName: 'John Know',
    userImg: require('../../assets/Dummy/john-pict.jpg'),
    messageTime: 'Mei 20',
    messageText: 'Hey there, this is my new app checkout this app',
  },
  {
    id: 4,
    userName: 'Dodit',
    userImg: require('../../assets/Dummy/dodit-pict.jpg'),
    messageTime: 'Mei 20',
    messageText: 'Hey there, this is my new app checkout this app',
  },
];

const Pesan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <Text style={styles.akun}>Pesan</Text>
        <Container>
          <FlatList
            data={Messages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Card
                onPress={() =>
                  navigation.navigate('ChatScreen')
                }>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </Container>
      </View>
    </View>
  );
};

export default Pesan;

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
    fontFamily: 'Poppins-Medium',
  },
});
