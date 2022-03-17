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
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
    { img: require('./assets/pic.png'), text: '$499.00' },
]
var DATA = [
    { img: require('./assets/men.jpg'), name: 'Men' },
    { img: require('./assets/women.png'), name: 'Women' },
    { img: require('./assets/pic.png'), name: 'shirts' },
    { img: require('./assets/pic.png'), name: 'jeans' },
    { img: require('./assets/pic.png'), name: 'tShirt' },
    { img: require('./assets/pic.png'), name: 'Accessories' },
    { img: require('./assets/pic.png'), name: 'kids' },
    { img: require('./assets/pic.png'), name: 'Women' },

]

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenList: '1',

        };
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 15, }}>WOMEN FASHION & ACCESS....</Text>
                    <TouchableOpacity >
                        <Image style={{ height: 20, width: 20 }} source={require('./assets/search.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')}>
                        <Image style={{ height: 20, width: 20 }} source={require('./assets/heart.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                        <Image style={{ height: 25, width: 25 }} source={require('./assets/cart.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ height: '100%', width: '25%', backgroundColor: '#D3D3D3' }}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(`${item.name}`, { category: item.name })} >
                                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: 70, width: 70, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={item.img} />
                                        <Text style={{ marginTop: 10, color: 'black' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>

                            }>
                        </FlatList>
                    </View>

                    <View style={{ height: '100%', width: '70%', }}>

                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
                            <Text style={{ fontSize: 12 }}>POPULAR</Text>
                            <View style={{ borderBottomWidth: 1, borderColor: 'gray', width: '100%', marginLeft: 10 }}></View>
                        </View>

                        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>All Popular</Text>

                        <View style={{
                            height: 100, flexDirection: 'row', width: '100%', flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center', padding: 8,
                        }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }}
                                        source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>SHIRTS</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }}
                                        source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>T-SHIRTS</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Brand')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }}
                                        source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>JEANS</Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                        <View style={{
                            height: 100, flexDirection: 'row', width: '100%', flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
                        }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenL')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LEGGING</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenK')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>KURTIS</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTop')}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>TOP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            height: 100, flexDirection: 'row', width: '100%', flexDirection: 'row',
                            justifyContent: 'space-between', alignItems: 'center', padding: 8, marginTop: 10
                        }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenP')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>PLAZZO</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenLower')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}>LOWER</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('womenTrackSuit')} >
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <Image style={{ height: 50, width: 50, borderRadius: 35, borderWidth: 1, borderColor: 'black' }} source={require('./assets/pic1.png')} />
                                    <Text style={{ color: 'black', fontSize: 13, marginTop: 10 }}> TRACK SUIT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        


                    </View>
                </View>

               


            </SafeAreaView>
        )
    }
}

