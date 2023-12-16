import {StyleSheet} from 'react-native';
import {Colors} from '../../Model/data/colors';

export const mainStyle = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  citiesSqaureContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginVertical: 18,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 25,
    color: Colors.PURPOLE,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: Colors.GREY,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 17,
    color: Colors.SOFT_WHITE,
  },
});
