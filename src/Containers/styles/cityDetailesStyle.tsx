import {StyleSheet} from 'react-native';
import {Colors} from '../../Model/data/colors';

export const cityDetailesStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  col: {
    flexDirection: 'column',
    padding: 5,
  },
  center: {
    justifyContent: 'center',
  },
  rowTemp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
  },
  headerCountry: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.SOFT_WHITE,
  },
  headerCity: {
    fontSize: 27,
    fontWeight: '900',
    color: Colors.SOFT_WHITE,
    textAlign: 'center',
  },
  weatherDescriptions: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.SOFT_WHITE,
  },
  humidity: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.SOFT_WHITE,
    alignSelf: 'center',
  },
  units: {
    color: Colors.SOFT_WHITE,
    fontSize: 10,
    paddingTop: 5,
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 20,
    fontWeight: '300',
    color: Colors.SOFT_WHITE,
    lineHeight: 30,
  },
  wrapperWeather: {
    flex: 1,
    padding: 5,
    borderWidth: 2,
    borderColor: Colors.SOFT_WHITE,
  },
  error: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  weather: {
    width: 120,
    fontSize: 44,
    color: Colors.SOFT_WHITE,
  },
});
