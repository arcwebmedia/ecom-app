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
    Modal,
    Share
} from 'react-native';

import { addToCart } from "./scr/redux/actions/CartAction"

import { connect } from 'react-redux';

class Wishlist extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        height: 40, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 8
                    }} >
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '40%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, }}>MY PRODUCT</Text>
                        </View>

                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <Text style={{ color: 'black', fontSize: 15, marginTop: 10, marginLeft: 10 }}>Wishlist</Text>
                    <View style={{ height: 700, justifyContent: 'center', alignItems: 'center', }}>
                        <Text>Wishlist is empty</Text>
                    </View>



                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default (Wishlist);