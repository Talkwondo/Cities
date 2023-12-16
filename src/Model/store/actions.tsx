import {createAsyncThunk} from '@reduxjs/toolkit';
import {citiesSlice} from '.';

export const {getWeatherByCitySuccess, setLoading, getWeatherByCityFailure} =
  citiesSlice.actions;

export const fetchWeatherByCity = createAsyncThunk(
  'Cities/fetchWeatherByCity',
  async (cityName: string, {dispatch}) => {
    try {
      dispatch(setLoading());
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=429bdcb5c0d3af9cde7ed83b3c6f81c9&query=${cityName}`,
      );
      const weatherData = await response.json();
      dispatch(getWeatherByCitySuccess(weatherData));
    } catch (error) {
      dispatch(getWeatherByCityFailure());
    }
  },
);
