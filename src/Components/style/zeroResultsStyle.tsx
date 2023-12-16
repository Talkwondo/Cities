import {StyleSheet} from 'react-native';
import {Colors} from '../../Model/data/colors';

export const zeroResultsStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: Colors.SOFT_WHITE,
    textAlign: 'center',
  },
});
