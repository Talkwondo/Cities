import {StyleSheet} from 'react-native';
import {Colors} from '../../Model/data/colors';

export const squareStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.SOFT_WHITE,
    borderRadius: 20,
    padding: 13,
    borderWidth: 2,
  },
  cityHeader: {
    fontSize: 17,
    color: 'white',
    paddingVertical: 5,
    fontWeight: '800',
  },
  countryHeader: {
    fontSize: 15,
    color: 'white',
    paddingTop: 8,
    paddingVertical: 5,
    fontWeight: '600',
  },
  description: {fontSize: 13, color: 'white'},
});
