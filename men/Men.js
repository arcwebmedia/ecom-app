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
  FlatList,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
var DATA = [
  { img: require('../assets/pic1.png'), name: 'Sweatshirt' },
  { img: require('../assets/pic1.png'), name: 'Jacket' },
  { img: require('../assets/pic1.png'), name: 'Sweaters' },
  { img: require('../assets/pic1.png'), name: 'Jacket' },
  { img: require('../assets/pic1.png'), name: 'Men' },
  { img: require('../assets/pic1.png'), name: 'Jacket' },
  { img: require('../assets/pic1.png'), name: 'Fashion' },
]

export default class Men extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} >
        <View style={{
          height: 40, flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center', padding: 8
        }} >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
          </TouchableOpacity>
          <Text style={{ color: 'black', fontSize: 15, }}>MEN FASHION & ACCESS....</Text>
          <TouchableOpacity >
            <Image style={{ height: 20, width: 20 }} source={require('../assets/search.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')}>
            <Image style={{ height: 20, width: 20 }} source={require('../assets/heart.png')} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image style={{ height: 25, width: 25 }} source={require('../assets/cart.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

        <ScrollView>
          <View style={{
            height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8
          }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Newarrival')} >
              <View style={{ height: 100, width: 100, backgroundColor: '#e06024', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>NEW</Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}> ARRIVAL</Text>
              </View>
              <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>NEW ARRIVAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ height: 100, width: 100, backgroundColor: '#e06024', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>BRAND</Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}> STORE</Text>
              </View>
              <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>BRAND STORE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ height: 100, width: 100, backgroundColor: '#e06024', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>UNDER</Text>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}> 199</Text>
              </View>
              <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>UNDER 199</Text>
            </TouchableOpacity>


          </View>

          <View style={{
            height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8
          }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('shirts')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/shirts.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SHIRTS</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('tShirt')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/t-shirt.jpeg')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>T-SHIRTS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('jeans')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/jeans.jpg')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>JEANS</Text>
              </View>
            </TouchableOpacity>


          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

