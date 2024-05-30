import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Hamburger({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingHorizontal: 10 }}>
        <Icon name="bars" size={30} color="white" />
      </View>
    </TouchableOpacity>
  )
}

export default Hamburger;