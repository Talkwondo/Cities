import {createSlice, configureStore} from '@reduxjs/toolkit';

import {Store} from '../types';

const initialState: Store = {
  cityWeather: {
    temperature: 0,
    weather_icons: [],
    weather_descriptions: [],
    humidity: 0,
  },
  loading: true,
  error: '',
};

export const citiesSlice = createSlice({
  name: 'Cities',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    getWeatherByCitySuccess: (state, action) => {
      const {temperature, weather_icons, weather_descriptions, humidity} =
        action.payload.current;
      state.cityWeather = {
        temperature,
        weather_icons,
        weather_descriptions,
        humidity,
      };
      state.loading = false;
    },
    getWeatherByCityFailure: state => {
      state.loading = false;
      state.error = 'was an error get city weather';
    },
  },
});

export const store = configureStore({
  reducer: citiesSlice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({}),
});
export default store;
