import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {CityDetailes} from './types';
import {cityDetailesStyle} from './styles/cityDetailesStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, Store} from '../Model/types';
import {fetchWeatherByCity} from '../Model/store/actions';
import WrapperWeather from './WrapperWeather';

const CityDetalis = ({route}: CityDetailes) => {
  const dispatch: AppDispatch = useDispatch();
  const {city, country, description, background} = route.params;
  const cityWeather = useSelector((state: Store) => state.cityWeather);
  const error = useSelector((state: Store) => state.error);
  const isLoading = useSelector((state: Store) => state.loading);

  useEffect(() => {
    dispatch(fetchWeatherByCity(city));
  }, [city, dispatch]);

  return (
    <SafeAreaView
      style={[cityDetailesStyle.container, {backgroundColor: background}]}>
      <ScrollView contentContainerStyle={cityDetailesStyle.content}>
        <View style={cityDetailesStyle.row}>
          <Text style={cityDetailesStyle.headerCity}>{city}</Text>
          <Text style={cityDetailesStyle.headerCountry}>{country}</Text>
        </View>
        <View style={cityDetailesStyle.row}>
          <Text style={cityDetailesStyle.paragraph}>{description}</Text>
        </View>
        <View style={cityDetailesStyle.row}>
          <View style={cityDetailesStyle.wrapperWeather}>
            <Text style={cityDetailesStyle.headerCity}>Weather Status</Text>
            <View
              style={[
                cityDetailesStyle.row,
                isLoading ? cityDetailesStyle.center : null,
              ]}>
              {isLoading ? (
                <ActivityIndicator size={'large'} />
              ) : error.length ? (
                <Text style={cityDetailesStyle.error}>{error}</Text>
              ) : (
                <WrapperWeather
                  background={background}
                  cityWeather={cityWeather}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityDetalis;
