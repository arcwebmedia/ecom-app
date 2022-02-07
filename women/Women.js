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
var DATA2 = [
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
  { img: require('../assets/pic.png'), text: '$499.00' },
]

export default class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenList: '1',

    };
  }
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
          <Text style={{ color: 'black', fontSize: 15, }}>WOMEN FASHION & ACCESS....</Text>
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


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <TouchableOpacity onPress={() => this.setState({ screenList: '1' })} style={{
            height: 40, width: 80, borderWidth: 1, borderRadius: 10, justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>All Popular</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ screenList: '2' })} style={{
            height: 40, width: 80, borderWidth: 1, borderRadius: 10, justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Sarees</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setState({ screenList: '3' })} style={{
            height: 40, width: 60, borderWidth: 1, borderRadius: 10, justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Kurtis</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            height: 40, width: 80, borderWidth: 1, borderRadius: 10, justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Suit & Dresses</Text>
          </TouchableOpacity>
        </View>
        {this.state.screenList == '1' ?
          <View style={{ flex: 1 }}>
            <View style={{
              height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
              justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
            }} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Wshirt')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/pic1.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SHIRTS</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenT')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/pic1.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>T-SHIRTS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenJ')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/JW.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>JEANS</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{
              height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
              justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
            }} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenL')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/leg.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LEGGING</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenK')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/Kurtis.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>KURTIS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTop')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/top.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>TOP</Text>
                </View>
              </TouchableOpacity>


            </View>
            <View style={{
              height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
              justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
            }} >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenP')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/plazzo.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>PLAZZO</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenLower')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/pic1.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LOWER</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTrackSuit')} >
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                  <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('../assets/pic1.png')} />
                  <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SPORT TRACK SUIT</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View> : this.state.screenList = '2' ? <View>
            <FlatList
              numColumns={2}
              data={DATA2}
              renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', marginLeft: 20 }}>
                <TouchableOpacity>
                  <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                </TouchableOpacity>
                <Text style={{ fontSize: 13, marginTop: 10 }}>{item.text}</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'black', }}>₹342 </Text>
                <TouchableOpacity style={{
                  height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                  alignItems: 'center', backgroundColor: '#ebe8e8',
                }}>
                  <Text style={{ color: 'black', fontSize: 13 }}>Free Delivery </Text>
                </TouchableOpacity>

              </View>}>

            </FlatList>

          </View> : this.state.screenList = '3' ? <View>
            <FlatList
              numColumns={2}
              data={DATA2}
              renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                <TouchableOpacity>
                  <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                  <Text style={{ marginTop: 10, color: 'black' }}>{item.text}</Text>
                </TouchableOpacity>
              </View>}>

            </FlatList>

          </View> : <View>
            <FlatList
              numColumns={2}
              data={DATA2}
              renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                <TouchableOpacity>
                  <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                  <Text style={{ marginTop: 10, color: 'black' }}>{item.text}</Text>
                </TouchableOpacity>
              </View>}>

            </FlatList>

          </View>}




      </SafeAreaView>
    )
  }
}

