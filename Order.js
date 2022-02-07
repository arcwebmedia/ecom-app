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
export default class Order extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >

                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >

                    <Text style={{ color: 'black', fontSize: 15, }}>ORDER</Text>
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
                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>Your Order</Text>
                <View style={{
                    height: 40, width: '90%', borderWidth: 0.5, borderColor: 'black', alignSelf: 'center', borderRadius: 10, marginTop: 10,
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <Image style={{ height: 20, width: 20, marginLeft: 15 }} source={require('./assets/search.png')} />
                    <TextInput
                        placeholder='Search by Keyword or Product ID'></TextInput>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ screenList: '1' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>All </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '2' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '3' })} style={{
                        height: 40, width: 60, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Shipped</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Cancelled</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ screenList: '1' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Delivered </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '2' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Exchange</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '3' })} style={{
                        height: 40, width: 60, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Return</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center',backgroundColor:'#dcdedc'
                    }}>
                        <Text>Others</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>
        )
    }
}

