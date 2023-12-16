import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import {SqureCity} from '../Components/SqureCity';
import {mainStyle} from './styles/mainStyle';
import {Colors} from '../Model/data/colors';
import Logo from '../Assets/logo.png';
import {Routes} from '../Model/data/routes';
import {ZeroResults} from '../Components/ZeroResults';
import {MainProps} from './types';
import {cities} from '../Model/data/cities';
import {City} from '../Model/types';

const Main = ({navigation}: MainProps) => {
  const [searchText, setSearchText] = useState('');

  const filter = cities.filter((data: City) => {
    return (
      data.city.toLowerCase().startsWith(searchText.toLowerCase()) ||
      data.country.toLowerCase().startsWith(searchText.toLowerCase())
    );
  });
  return (
    <SafeAreaView style={mainStyle.contianer}>
      <Image source={Logo} style={mainStyle.logo} resizeMode="contain" />
      <TextInput
        style={mainStyle.searchBar}
        placeholder="Search..."
        placeholderTextColor={Colors.GREY}
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      {!filter.length ? (
        <ZeroResults />
      ) : (
        <FlatList
          data={filter}
          renderItem={({item, index}) => (
            <>
              <TouchableOpacity
                onPress={() => navigation?.navigate(Routes.CITY, {...item})}
                style={mainStyle.citiesSqaureContainer}>
                <SqureCity
                  city={item.city}
                  country={item.country}
                  description={item.description}
                  background={item.background}
                />
              </TouchableOpacity>
              {}
              {filter.length % 2 !== 0 && filter.length - 1 === index ? (
                <View style={mainStyle.citiesSqaureContainer} />
              ) : null}
            </>
          )}
          numColumns={2}
          keyExtractor={() => uuid.v4().toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Main;
