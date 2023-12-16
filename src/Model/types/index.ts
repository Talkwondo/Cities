import store from '../store';

export interface City {
  city: string;
  country: string;
  description: string;
  background: string;
}

export interface WeatherData {
  temperature: number;
  weather_icons: string[];
  weather_descriptions: string[];
  humidity: number;
}

export interface Store {
  cityWeather: WeatherData;
  loading: boolean;
  error: string;
}

export type AppDispatch = typeof store.dispatch;
