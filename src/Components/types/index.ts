import {NavigationProp} from '@react-navigation/native';
import {City} from '../../Model/types';
import {Routes} from '../../Model/data/routes';
import {ListRenderItem} from 'react-native';

export interface ButtonCityProps {
  item: City;
  index: number;
  navigation: NavigationProp<RootStackParamList, Routes.CITY>;
  filterLength: number;
}
export type RootStackParamList = {
  MAIN: undefined;
  CITY: City;
};

export interface ItemProps {
  item: ListRenderItem<City>;
  index: number;
}
