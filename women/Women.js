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

import { getProduct } from "../scr/redux/actions/productAction"
import { connect } from 'react-redux';

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

class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenList: '1',
      categoryProduct: []
    };
  }
  componentDidMount() {
    this.fetchByCategory(" Shirts", "T-Shirts", "Jeans")
  }

  async fetchByCategory(Women) {
    await fetch(`http://192.168.1.11:4001/api/v1/products?category=${Women}`, {
      method: "GET",

    }).then(res => res.json())
      .then(data => {
        console.log(data.products)
        this.setState({ categoryProduct: data.products })
      }
      ).catch(e => console.log(e))
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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} >
            <Image style={{ height: 25, width: 25 }} source={require('../assets/cart.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

        <View style={{ flex: 1 }}>
          <View style={{
            height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
          }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Wshirt')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/pic1.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SHIRTS</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenT')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/pic1.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>T-SHIRTS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenJeans')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/JW.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>JEANS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{
            height: 150, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
          }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenLegging')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/leg.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LEGGING</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenKurtis')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/Kurtis.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>KURTIS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTop')}>
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/top.png')} />
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
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/plazzo.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>PLAZZO</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenLower')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/pic1.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LOWER</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTrackSuit')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 120, width: 100, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('../assets/pic1.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SPORT TRACK SUIT</Text>
              </View>
            </TouchableOpacity>
          </View>



        </View>


      </SafeAreaView>
    )
  }
}
const mapsStateToProps = (state) => {
  console.log(state.product)
  return {
    product: state.product.products
  }
}


const mapsDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProduct())
  }

}
export default connect(mapsStateToProps, mapsDispatchToProps)(Women)

