import React from 'react';

import {Provider} from 'react-redux';
import store from '../Model/store';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Colors} from '../Model/data/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../Model/data/routes';
import Main from './Main';
import CityDetalis from './CityDetalis';
import {RootStackParamList} from '../Components/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const CitiesTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.CITIES_BG,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={CitiesTheme}>
        <Stack.Navigator initialRouteName={Routes.MAIN}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={Routes.MAIN}
            component={Main}
          />
          <Stack.Screen
            name={Routes.CITY}
            component={CityDetalis}
            options={{
              headerTransparent: true,
              headerShown: true,
              headerTitle: '',
              headerBackVisible: true,
              headerBackTitleVisible: false,
              headerTintColor: Colors.SOFT_WHITE,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
