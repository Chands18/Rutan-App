import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';


const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);


  const renderSend = (props) => {
      return(
          <Send {...props}>
              <View>
                <Icon name='navigate-outline' size={30} style={{ marginRight:15, marginBottom:8 }} />
              </View>
          </Send>
      )
  }

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {backgroundColor: '#2E2D98'},
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <Icon name='chevron-down-circle-outline' size={24} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      placeholder="Type your message"
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
