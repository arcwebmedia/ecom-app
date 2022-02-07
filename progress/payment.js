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

export default class Payment extends Component {
    constructor() {
        super();
        this.state = {
            clicked: 0,
            borderColor: 0,
            pressed: false,
            modalVisible: false,
            quantity: '0'
        }
    }

    changeColor(val) {
        this.setState({ clicked: val })
        this.setState({ borderColor: val })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView>

                    <View style={{
                        height: 40, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 8
                    }} >
                        <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, marginLeft: 20 }}>PAYMENT MODE</Text>
                        </View>

                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <View style={{ height: 40, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'space-between', alignItems: 'center', padding: 8 }} ></View>

                    <View style={{ marginTop: 10, width: '100%', height: 350, elevation: 5, backgroundColor: 'white' }} >
                        <Text style={{ color: 'black', fontSize: 17, marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>Select payment mode</Text>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                                <Image style={{ height: 25, width: 30, marginLeft: 20 }} source={require('../icons/upi.png')} />
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>UPI</Text>
                                <Image style={{ height: 25, width: 25, position: 'absolute', right: 10 }} source={require('../icons/down.png')} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('../icons/wallet.png')} />
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Wallet</Text>
                                <Image style={{ height: 25, width: 25, position: 'absolute', right: 10 }} source={require('../icons/down.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('../icons/credit.png')} />
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Debit/Credit Card</Text>
                                <Image style={{ height: 25, width: 25, position: 'absolute', right: 10 }} source={require('../icons/down.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                                <Image style={{ height: 25, width: 25, marginLeft: 20 }} source={require('../icons/netbank.png')} />
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Net Banking</Text>
                                <Image style={{ height: 25, width: 25, position: 'absolute', right: 10 }} source={require('../icons/down.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', alignSelf: 'center', height: 50, marginTop: 10 }}>
                                <Image style={{ height: 20, width: 25, marginLeft: 20, borderWidth: 1, borderColor: 'black' }} source={require('../icons/rupee.png')} />
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>Cash On delivery</Text>
                                <Image style={{ height: 25, width: 25, position: 'absolute', right: 10 }} source={require('../icons/down.png')} />
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 10, width: '100%', height: 80, elevation: 5, backgroundColor: 'white', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 10
                    }} >

                        <View style={{ width: '60%', height: 50, marginTop: 10 }}>
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>Reselling the order?</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10 }}>Click on 'Yes' to add Final Price</Text>

                        </View>
                        <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'gray',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(1)}>
                                <Text style={{ fontWeight: 'bold', }}>no</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'gray',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(2)}>
                                <Text style={{ fontWeight: 'bold' }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10, width: '100%', height: 150, elevation: 5, backgroundColor: 'white',
                        justifyContent: 'center', marginBottom: 10
                    }} >
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 10, }}>Price Details</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginLeft: 10 }}> Total Product Price</Text>
                            <Text style={{ fontSize: 13, position: 'absolute', right: 10 }}>₹342</Text>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', width: '95%', alignSelf: 'center', marginTop: 10 }}></View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>Order Total </Text>
                            <Text style={{ fontSize: 13, position: 'absolute', right: 10, color: 'black' }}>₹342</Text>

                        </View>

                    </View>
                </ScrollView>

                <View style={{ height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>₹342</Text>
                        <Text style={{ fontSize: 15, color: '#e06024', fontWeight: 'bold' }}>VIEW PRICE DETAILS </Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('orderSummary')
                    }
                        style={{
                            height: 40, width: '40%', backgroundColor: '#e06024', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 8
                        }} >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                </View>






            </SafeAreaView>
        )
    }
}