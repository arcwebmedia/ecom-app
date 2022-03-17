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
    FlatList
} from 'react-native';

var DATA = [
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
export default class Order extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >

                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '20%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, }}>ORDER</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between' }}>
                        <TouchableOpacity >
                            <Image style={{ height: 20, width: 20 }} source={require('./assets/search.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} >
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
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>All </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '2' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '3' })} style={{
                        height: 40, width: 60, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Shipped</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Cancelled</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TouchableOpacity onPress={() => this.setState({ screenList: '1' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Delivered </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '2' })} style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Exchange</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({ screenList: '3' })} style={{
                        height: 40, width: 60, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Return</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        height: 40, width: 80, borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', backgroundColor: '#dcdedc'
                    }}>
                        <Text>Others</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <View style={{ height: 250, backgroundColor: 'white', elevation: 3, marginTop: 10, width: '100%' }}>
                        <Text style={{ fontSize: 15, color: 'black', marginTop: 10, marginLeft: 10 }}>6 January</Text>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <Text style={{ fontSize: 13, color: 'gray', marginLeft: 20, marginTop: 10 }}>Order 9684652394</Text>
                        <Text style={{ fontSize: 13, color: 'gray', marginLeft: 20 }}>Sold to
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>  Reeta Devi</Text></Text>

                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black', marginLeft: 10 }} source={item.img} />
                            <View>
                                <TouchableOpacity style={{
                                    height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                                    alignItems: 'center', backgroundColor: '#ebe8e8', marginLeft: 10,
                                }}>
                                    <Text style={{ color: 'black', fontSize: 10 }}>Prepaid Order </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 20 }}>{item.name}</Text>
                                <Text style={{ fontSize: 10, color: 'black', marginLeft: 20 }}>Delivered on 12 January,2022</Text>
                            </View>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>
                        <Text style={{ fontSize: 15, color: 'black', marginLeft: 20, marginTop: 10 }}>Rate your experience</Text>

                    </View>}>

                </FlatList>




            </SafeAreaView>
        )
    }
}

