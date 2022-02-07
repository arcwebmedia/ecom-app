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
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
    { img: require('../assets/pic1.png'), text: 'Classy Fashionable women  Lower' },
]

import { addToCart } from "./scr/redux/actions/CartAction"

import { connect } from 'react-redux';

 export default class womenLower extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                 <View  style={{justifyContent:'space-between',flexDirection:'row',width:'40%'}}>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 15, }}> Women Lower</Text>
                 </View>
                  <View style={{justifyContent:'space-between',flexDirection:'row',width:'30%'}}>
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
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>


                <FlatList
                    numColumns={2}
                    data={DATA2}
                    renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', marginLeft: 20 }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('wLower')}>
                            <Image style={{ height: 150, width: 150, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                             </TouchableOpacity>

                        <Text style={{marginTop: 10, color: 'black',fontSize:10 }}>{item.text}</Text>
                        <Text style={{ fontSize:13, fontWeight: 'bold', color: 'black', }}>₹342 </Text>
                        <TouchableOpacity  style={{
                            height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                            alignItems: 'center', backgroundColor: '#ebe8e8',
                        }}>
                            <Text style={{ color: 'black', fontSize: 13 }}>Free Delivery </Text>
                        </TouchableOpacity>
                     
                    </View>}>

                </FlatList>



            </SafeAreaView>
        )
    }
}

