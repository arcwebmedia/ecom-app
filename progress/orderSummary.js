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

export default class OrderSummary extends Component {
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
                            <Text style={{ color: 'black', fontSize: 13, marginLeft: 20 }}>ORDER SUMMARY</Text>
                        </View>

                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <View style={{ height: 40, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'space-between', alignItems: 'center', padding: 8 }} ></View>

                    <View style={{ width: '100%', height: 200, elevation: 5, backgroundColor: 'white' }} >
                        <Text style={{ color: 'black', fontSize: 12, marginLeft: 20, marginTop: 20, fontWeight: 'bold' }}>Estimated Delivery by Thursday,10th Feb</Text>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', padding: 10 }}>
                            <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black' }} source={require('../assets/pic.png')} />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 13, color: 'black', }}>classy Fashionable Men shirt</Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>Size: M  =  Qty:1 </Text>
                                <Text style={{ fontSize: 13, color: 'black' }}>₹342 </Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>
                        <Text style={{ fontSize: 13, marginTop: 10 }}>Supplier:Wow Collection</Text>


                    </View>

                    <View style={{ width: '100%', height: 150, elevation: 5, backgroundColor: 'white', marginTop: 10 }} >
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>Reeta Devi</Text>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10, }}>Reeta Devi</Text>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>866,phase 4, 59 sector,mohali panjab,160059</Text>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>+91 9805582352</Text>
                    </View>
                    <View style={{ width: '100%', height: 100, elevation: 5, backgroundColor: 'white', marginTop: 10 }} >
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>Payment Method</Text>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10, }}>Net Banking</Text>

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