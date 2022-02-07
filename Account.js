import React, { Component } from 'react';

import {
  ImageBackground,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
export default class Account extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >

                    <Text style={{ color: 'black', fontSize: 15, }}>ACCOUNT</Text>
                    <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between' }}>
                        <TouchableOpacity >
                            <Image style={{ height: 20, width: 20 }} source={require('./assets/search.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/cart.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
      
      </SafeAreaView>
    )
  }
}

