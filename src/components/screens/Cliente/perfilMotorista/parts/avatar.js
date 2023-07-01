/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';

const avatar = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../../../../assets/icones/avatar.png')}
        style={{
          width: 150,
          height: 150,
          flexDirection: 'column',
          position: 'absolute',
          borderRadius: 100,
        }}
      />
    </View>
  );
};
export default avatar;
