import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

const CheckBox = ({isChecked}) => {
  const checkBoxStyle = useMemo(() => {
    return [styles.checkBox, isChecked && styles.checked];
  }, [isChecked]);

  return <View style={checkBoxStyle} pointerEvents="none" />;
};

const styles = StyleSheet.create({
  checkBox: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D6001B',
    marginBottom: -80,
    marginTop: 70,
  },
  checked: {
    backgroundColor: '#D6001B',
  },
});

export default CheckBox;
