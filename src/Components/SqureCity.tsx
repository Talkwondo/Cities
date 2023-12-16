import React from 'react';
import {Text, View} from 'react-native';
import {squareStyle} from './style/squreStyle';
import {City} from '../Model/types';

export const SqureCity = ({city, country, description, background}: City) => {
  return (
    <View style={[squareStyle.container, {backgroundColor: background}]}>
      <Text style={squareStyle.cityHeader}>{city}</Text>
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={squareStyle.description}>
        {description}
      </Text>
      <Text style={squareStyle.countryHeader}>{country}</Text>
    </View>
  );
};
