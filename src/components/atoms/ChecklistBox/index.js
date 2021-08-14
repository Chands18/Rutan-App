import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ChecklistBox = ({tipe}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{tipe}</Text>
    </View>
  );
};

export default ChecklistBox;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F2F6FF',
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: '#040505',
    fontFamily: 'Poppins-Light',
    marginLeft: 5,
  },
});
