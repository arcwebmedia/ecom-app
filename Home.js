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
  LogBox,
  Share
} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";

import { getProduct } from "./scr/redux/actions/productAction"
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

var DATA = [
  { img: require('./assets/men.jpg'), name: 'Men' },
  { img: require('./assets/women.png'), name: 'Women' },
  { img: require('./assets/pic.png'), name: 'Accessories' },
  { img: require('./assets/pic.png'), name: 'kids' },
  { img: require('./assets/pic.png'), name: 'Women' },

]
const shareOptions = {
  title: 'Title',
  message: 'Message to share',
  url: 'www.example.com',
  subject: 'Subject'
};

const choosephotoFromGallery = () => {
  ImagePicker.openPicker({
    width: 300,
    compressImageMaxHeight: 400,
    cropping: true,
    compressImageQuality: 0.7
  }).then(image => {
    console.log(image);
  });
}
class Home extends Component {

  onSharePress = () => Share.share(shareOptions);
  constructor(props) {
    super(props);
    this.state = {
      myButton: true,
      myImage: require('./assets/heart.png'),
      images: [
        require('./assets/img.jpg'),
        require('./assets/img1.jpg'),
        require('./assets/img2.jpg'),
      ],
      categoryProduct: []
    };
  }
  // onBtnClick() {
  //   this.setState({ myButton: !this.state.myButton })
  //   if (this.state.myButton == false) {
  //     this.setState({ myImage: require('./assets/heart.png') })
  //   }
  //   if (this.state.myButton == true) {
  //     this.setState({ myImage: require('./assets/heart1.png') })

  //   }
  // }
  async componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    this.props.getProducts()
    this.fetchByCategory("men")
  }

  async fetchByCategory(category) {
    await fetch(`http://192.168.1.2:4001/api/v1/products?category=${category}`, {
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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}
          nestedScrollEnabled={false}>
          <View style={{
            height: 40, flexDirection: 'row', marginTop: 10,
            justifyContent: 'space-between', alignItems: 'center', padding: 8
          }} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}>
                <Image style={{ height: 40, width: 40, }} source={require('./assets/profile.png')} />
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
            <View style={{ width: '75%', flexDirection: 'row', marginLeft: 10, alignItems: 'center', marginRight: 10, }}>
              <Image style={{ height: 20, width: 20, }} source={require('./assets/search.png')} />
              <TextInput
                placeholder='Search by Keyword or Product ID'></TextInput>
            </View>
          </View>

          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(`${item.name}`, { category: item.name })} >
                <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                  <Image style={{ height: 70, width: 70, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                  <Text style={{ marginTop: 10, color: 'black' }}>{item.name}</Text>
                </View>
              </TouchableOpacity>}>
          </FlatList>

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
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                  source={require('./assets/pic1.png')} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 10 }} >Product for you</Text>

          <FlatList
            numColumns={2}
            data={this.props.product}
            renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", {
                id: item._id,
                price: item.price,
                name: item.name,
                rating: item.ratings,
                reviews: item.numOfReviews,
                Stock: item.Stock
              })} >
                {/* <View style={{
                  height: 25, width: 25, backgroundColor: 'white', borderRadius: 12, position: 'absolute', right: 10, marginTop: 10,
                  justifyContent: 'center', alignItems: 'center',padding:10
                }}>
                  <TouchableOpacity onPress={() => this.onBtnClick()}>
                    <Image style={{ height: 20, width: 20, }} source={this.state.myImage} />
                  </TouchableOpacity>
                </View> */}
                <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'red' }} source={item.images[0] && item.images[0].url} />

                <View style={{
                  height: 20, width: 40, backgroundColor: 'white', marginTop: 128, position: 'absolute', right: 2,
                  justifyContent: 'center', alignItems: 'center', borderRadius: 5
                }}>
                  <Text style={{ fontSize: 10, color: 'black' }}>+{item.Stock}more</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Text style={{ fontSize: 13, color: 'gray' }}>{item.name}</Text>
                  <TouchableOpacity onPress={this.onSharePress} >
                    <Image style={{ height: 20, width: 20 }} source={require('./icons/share.png')} />
                  </TouchableOpacity>
                </View>

                <Text style={{ color: 'black' }}>{item.price}</Text>
                <TouchableOpacity style={{
                  height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                  alignItems: 'center', backgroundColor: '#ebe8e8',
                }}>
                  <Text style={{ color: 'gray', fontSize: 13 }}>Free Delivery </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity style={{
                    height: 25, width: 50, borderRadius: 10, justifyContent: 'center',
                    alignItems: 'center', borderWidth: 1, borderColor: 'gray'
                  }}>
                    <Text style={{ color: 'blue', fontSize: 13, fontWeight: 'bold' }}>{item.ratings}</Text>
                  </TouchableOpacity>
                  <Text style={{ color: 'gray', marginLeft: 10, fontSize: 12 }}>({item.numOfReviews})</Text>
                </View>

              </TouchableOpacity>
            </View>}>

          </FlatList>

        </ScrollView>



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
export default connect(mapsStateToProps, mapsDispatchToProps)(Home)