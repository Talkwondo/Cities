import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {RootStackParamList} from '../../Components/types';
import {Routes} from '../../Model/data/routes';
import {WeatherData} from '../../Model/types';

export interface MainProps {
  navigation?: NavigationProp<ParamListBase>;
}

export interface CityDetailes {
  navigation: NavigationProp<RootStackParamList, Routes.CITY>;
  route: RouteProp<RootStackParamList, Routes.CITY>;
}

export interface WrapperWeatherProps {
  background: string;
  cityWeather: WeatherData;
}
