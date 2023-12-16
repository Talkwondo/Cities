import React, {useCallback, useState} from 'react';
import {Image, Switch, Text, View} from 'react-native';
import {cityDetailesStyle} from './styles/cityDetailesStyle';
import {Units} from '../Model/data/units';
import {Colors} from '../Model/data/colors';
import {changeTempretureUnit} from '../Controllers';
import {WrapperWeatherProps} from './types';

const WrapperWeather = ({background, cityWeather}: WrapperWeatherProps) => {
  const [showCelsuis, setShowCeluis] = useState(true);

  const changeUnit = useCallback(
    (unit: Units) => {
      return changeTempretureUnit(unit, cityWeather.temperature);
    },
    [cityWeather.temperature],
  );
  return (
    <View style={cityDetailesStyle.container}>
      <View style={cityDetailesStyle.row}>
        <View style={cityDetailesStyle.rowTemp}>
          <Text style={cityDetailesStyle.weather}>
            {`${
              showCelsuis
                ? changeUnit(Units.CELSIUS)
                : changeUnit(Units.FAHRENHEIT)
            }°${showCelsuis ? Units.CELSIUS : Units.FAHRENHEIT}`}
          </Text>
          <View style={cityDetailesStyle.col}>
            <Switch
              trackColor={{
                false: Colors.GREY,
                true: Colors.SOFT_WHITE,
              }}
              thumbColor={showCelsuis ? background : Colors.SOFT_WHITE}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setShowCeluis(!showCelsuis);
              }}
              value={showCelsuis}
            />
            <Text style={cityDetailesStyle.units}>F or C</Text>
          </View>
        </View>
        <Image
          source={{uri: cityWeather.weather_icons[0]}}
          style={cityDetailesStyle.image}
        />
      </View>
      <View style={cityDetailesStyle.row}>
        <Text style={cityDetailesStyle.weatherDescriptions}>
          {cityWeather.weather_descriptions?.join()}
        </Text>
        <Text style={cityDetailesStyle.humidity}>
          {`Humidity: ${cityWeather.humidity}`}
        </Text>
      </View>
    </View>
  );
};

export default WrapperWeather;
