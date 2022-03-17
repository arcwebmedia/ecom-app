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
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
]

import { addToCart } from "./scr/redux/actions/CartAction"

import { connect } from 'react-redux';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myButton: true,
            myImage: require('./assets/heart.png'),
            categoryProduct: []

        };
    }
    onBtnClick() {
        this.setState({ myButton: !this.state.myButton })
        if (this.state.myButton == false) {
            this.setState({ myImage: require('./assets/heart.png') })
        }
        if (this.state.myButton == true) {
            this.setState({ myImage: require('./assets/heart1.png') })
        }
    }
    componentDidMount() {
        this.fetchByCategory("T-Shirts")
    }

    async fetchByCategory(category) {
        await fetch(`http://192.168.1.3:4001/api/v1/products?category=${category}`, {
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
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '20%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, }}>Shirt</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
                        <TouchableOpacity >
                            <Image style={{ height: 20, width: 20 }} source={require('./assets/search.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onBtnClick()}>
                            <Image style={{ height: 20, width: 20, }} source={this.state.myImage} />
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/cart.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

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

            </SafeAreaView>
        )
    }
}

const mapsStateToProps = (state) => {
    console.log(state)
    return {
        cartItems: state.cart
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch(addToCart(item))
    }

}

export default connect(mapsStateToProps, mapsDispatchToProps)(Brand)