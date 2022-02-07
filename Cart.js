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
var DATA1 = [
    { img: require('./assets/s1.png'), name: 'Shirt for Men', text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/t1.png'), name: 'T-Shirt for Men', text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },
    { img: require('./assets/pic.png'), text: '499.00' },

]


export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            quantity: '0'
        }
    }
    decreaseQuantity = () => {
        if (this.state.quantity <= 1) {
            return;
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }
    increaseQuantitiy = () => {
        this.setState({
            quantity: this.state.quantity - 1 + 2
        });
    }
    addToCart(product, quantity) {
        return (dispatch) => {
            const cartItem = {
                "id": product.id,
                "image": product.images[0].src,
                "name": product.name,
                "quantity": quantity
            }
            dispatch({
                type: types.ADD_TO_CART_SUCCESS,
                item: cartItem
            });
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>
                    <View style={{ height: 50, backgroundColor: 'white', elevation: 8, padding: 10, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 10 }}>Shopping Cart</Text>
                    </View>

                    <FlatList
                        data={DATA1}
                        renderItem={({ item }) => <View style={{ height: 150, backgroundColor: 'white', elevation: 8, padding: 10, marginTop: 20, }}>
                            <Text style={{ fontSize: 13, color: 'black' }}>{item.name} </Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black', }} source={item.img} />
                                <View>
                                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 20 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>{item.text}</Text>
                                </View>

                                <View style={{ height: 80, width: 40, justifyContent: 'space-between', alignItems: 'center', marginLeft: 50 }}>
                                    <TouchableOpacity style={{
                                        height: 25, width: 25, borderWidth: 1, borderColor: 'gray', justifyContent: 'center',
                                        alignItems: 'center', borderRadius: 12
                                    }}
                                        onPress={this.decreaseQuantity}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                    <Text>{this.state.quantity}</Text>

                                    <TouchableOpacity style={{
                                        height: 25, width: 25, borderWidth: 1, borderColor: 'gray', justifyContent: 'center',
                                        alignItems: 'center', borderRadius: 12
                                    }}
                                        onPress={this.increaseQuantitiy}>
                                        <Text style={{ fontSize: 15 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>}>

                    </FlatList>





                </View>

            </SafeAreaView>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}