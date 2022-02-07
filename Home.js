import React, { Component } from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

var DATA = [
  { img: require('./assets/profile.png'), name: 'Categories' },
  { img: require('./assets/profile.png'), name: 'Accessories' },
  { img: require('./assets/profile.png'), name: 'Men' },
  { img: require('./assets/profile.png'), name: 'Women' },
  { img: require('./assets/profile.png'), name: 'Fashion' },
  { img: require('./assets/profile.png'), name: 'Accessories' },
  { img: require('./assets/profile.png'), name: 'Men' },
  { img: require('./assets/profile.png'), name: 'Women' },
  { img: require('./assets/profile.png'), name: 'Fashion' },
]

var DATA2 = [
  { img: require('./assets/pic.png'), name: 'Women flex dress', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Blue Long Sleeve Shirt', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Handbags', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Midi dress', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Women 2-pieces dress', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Gold earings for women', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Men', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Women', text: '$499.00' },
  { img: require('./assets/pic.png'), name: 'Fashion', text: '$499.00' },
]

var DATA1 = [
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
  { img: require('./assets/pic.png'), },
]
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/img.jpg'),
        require('./assets/img1.jpg'),
        require('./assets/img2.jpg'),
      ]
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flexGrow: 1 }}
          nestedScrollEnabled={true}>
          <View style={{
            height: 40, flexDirection: 'row', marginTop: 10,
            justifyContent: 'space-between', alignItems: 'center', padding: 8
          }} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                <Image style={{ height: 40, width: 40, }} source={require('./assets/profile.png')}/>
              </TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 15, marginLeft: 15 }}>User</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '30%' }}>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')}  >
                <Image style={{ height: 20, width: 20 }} source={require('./assets/heart.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('notification')}>
                <Image style={{ height: 20, width: 20 }} source={require('./assets/notification.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} >
                <Image style={{ height: 25, width: 25 }} source={require('./assets/cart.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{
            height: 40, width: '90%', borderWidth: 0.5, borderColor: 'black', alignSelf: 'center', borderRadius: 10, marginTop: 10,
            flexDirection: 'row', alignItems: 'center'
          }}>
            <Image style={{ height: 20, width: 20, marginLeft: 15 }} source={require('./assets/search.png')} />
            <TextInput
              placeholder='Search by Keyword or Product ID'></TextInput>
          </View>

          <View style={{
            height: 100, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
          }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require('./assets/men.jpg')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>Men</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Women')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require('./assets/women.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>Women</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require('./assets/pic1.png')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>Accessories</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 60, width: 60, borderRadius: 30 }} source={require('./assets/kids.jpg')} />
                <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>Kids</Text>
              </View>
            </TouchableOpacity>


          </View>

          <View style={{ flex: 1, backgroundColor: 'white', height: 150, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={150}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
            />
          </View>

          <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginLeft: 10 }} >Trending Now</Text>
          <View style={{
            height: 100, flexDirection: 'row', width: '100%', flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8, width: '80%'
          }} >


            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }} source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>



          </View>



          <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 10 }} >Product for you</Text>

          <FlatList
            numColumns={2}
            data={DATA2}
            renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
              <TouchableOpacity>
                <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'red' }} source={item.img} />
                <Text style={{ marginTop: 10, color: 'black' }}>{item.name}</Text>
              </TouchableOpacity>
            </View>}>

          </FlatList>





        </ScrollView>



      </SafeAreaView>
    )
  }
}