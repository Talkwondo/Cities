import React from 'react';
import {Image, Text, View} from 'react-native';
import {zeroResultsStyle} from './style/zeroResultsStyle';
import Logo from '../Assets/logo.png';

export const ZeroResults = () => {
  return (
    <View style={zeroResultsStyle.container} testID="zero-results">
      <Image style={zeroResultsStyle.image} source={Logo} />
      <Text style={zeroResultsStyle.title}>No results</Text>
    </View>
  );
};
