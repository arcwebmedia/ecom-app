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
        <ScrollView>


          <View style={{
            height: 40, flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8, backgroundColor: 'white', elevation: 3
          }} >

            <View style={{ flexDirection: 'row', width: '70%' }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
              </TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 15, marginLeft:10}}>ACCOUNT</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between' }}>
              <TouchableOpacity >
                <Image style={{ height: 20, width: 20 }} source={require('./assets/search.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                <Image style={{ height: 25, width: 25 }} source={require('./assets/cart.png')} />
              </TouchableOpacity>
            </View>
          </View>


          <TouchableOpacity onPress={() => this.props.navigation.navigate('profile')}
            style={{ height: 200, backgroundColor: 'white', marginTop: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Image style={{ height: 80, width: 80, borderRadius: 40, marginLeft: 10, }}
                source={require('./icons/male.png')} />
              <View style={{ marginLeft: 10 }} >
                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Reeta Devi</Text>
                <View style={{ marginLeft: 10, flexDirection: 'row' }} >
                  <View style={{
                    height: 25, width: 80, borderRadius: 10, justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#ebe8e8', marginTop: 10
                  }}>
                    <Text style={{ color: 'gray', fontSize: 13 }}>Graduate </Text>
                  </View>
                  <View style={{
                    height: 25, width: 60, borderRadius: 10, justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#ebe8e8', marginTop: 10, marginLeft: 10
                  }}>
                    <Text style={{ color: 'gray', fontSize: 13, }}>1795 </Text>
                  </View>
                </View>
              </View>

            </View>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', width: '95%', alignSelf: 'center', marginTop: 20 }}></View>

            <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10, marginTop: 10 }}>6 fields left to comlete</Text>
            <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, marginTop: 10 }}>You can earn 50 points by completing  your profile</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ height: 60, backgroundColor: 'white', marginTop: 10, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, }}>
              <Image style={{ height: 25, width: 30, marginLeft: 10 }} source={require('./icons/helpCentre.png')} />
              <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Help Centre</Text>

            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 10, width: '100%', height: 500, elevation: 5, backgroundColor: 'white', marginBottom: 20 }} >


            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 25, width: 30, marginLeft: 20 }} source={require('./icons/upi.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>My Journey</Text>
              </View>
            </TouchableOpacity>

            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('./icons/myShop.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>My Followed Shops</Text>
              </View>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('./icons/netbank.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>My Bank Details</Text>

              </View>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('./assets/share.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>My Shared Products</Text>

              </View>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('./icons/credit.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>My Payments</Text>

              </View>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 20, width: 25, marginLeft: 20 }} source={require('./icons/logo.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Business Logo</Text>

              </View>


            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 20, width: 25, marginLeft: 20, }} source={require('./icons/settings.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Settings</Text>

              </View>

            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                <Image style={{ height: 20, width: 25, marginLeft: 20, }} source={require('./icons/rate.png')} />
                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Rate</Text>

              </View>

            </TouchableOpacity>

          </View>


        </ScrollView>
      </SafeAreaView>
    )
  }
}

