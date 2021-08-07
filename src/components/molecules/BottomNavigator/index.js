import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcAkunOff,
  IcAkunOn,
  IcHomeOff,
  IcHomeOn,
  IcJobOff,
  IcJobOn,
  IcMsgOff,
  IcMsgOn,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Beranda':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Pekerjaan':
      return focus ? <IcJobOn /> : <IcJobOff />;
    case 'Pesan':
      return focus ? <IcMsgOn /> : <IcMsgOff />;
    case 'Akun':
      return focus ? <IcAkunOn /> : <IcAkunOff />;
    default:
      return <IcOrderOn />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused}  />
            <Text
              style={{
                color: isFocused ? '#D32421' : '#788795',fontSize:13  
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignContent:'center'
  },
});
