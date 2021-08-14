/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#D32421',
      height: 3,
      width: '0.2%',
      marginLeft: '0.1%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const DalamProses = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}} />
);

const Riwayat = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const PekerjaanTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 1, title: 'Dalam Proses'},
    {key: 2, title: 'Riwayat'},
  ]);

  const renderScene = SceneMap({
    1: DalamProses,
    2: Riwayat,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};
export default PekerjaanTabSection;

const styles = StyleSheet.create({});
