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


import { addToCart } from "../scr/redux/actions/CartAction"

import { connect } from 'react-redux';

const shareOptions = {
    title: 'Title',
    message: 'Message to share',
    url: 'www.example.com',
    subject: 'Subject'
};


class shirtD extends Component {
    onSharePress = () => Share.share(shareOptions);

    constructor() {
        super();
        this.state = {
            clicked: 0,
            borderColor: 0,
            pressed: false,
            modalVisible: false,
            modalVisible2: false,
            quantity: '0',
            imageColor: 0
        }
    }

    changeColor(val) {
        this.setState({ clicked: val })
        this.setState({ borderColor: val })

    }
    changeImageColor(col) {
        this.setState({ imageColor: col })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisible2(visible) {
        this.setState({ modalVisible2: visible });
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
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{
                        height: 40, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 8
                    }} >
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '20%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, }}>Shirt</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
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

                    <View style={{ backgroundColor: 'white' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'white' }} >
                            <Image style={{ height: 250, width: 200, }} source={require('../assets/s1.png')} />
                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, color: 'black', marginTop: 20, }}>₹342 </Text>
                        <TouchableOpacity onPress={() => this.setState({ screenList: '1' })} style={{
                            height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                            alignItems: 'center', backgroundColor: '#ebe8e8', marginLeft: 10, marginBottom: 20, marginTop: 10
                        }}>
                            <Text style={{ color: 'black', fontSize: 13 }}>Free Delivery </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Select Size </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '80%' }}>
                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(1)}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>M</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(2)}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>L</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 3 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 3 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(3)}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>XL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 4 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 4 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(4)}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>XXL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 120, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Product Details </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>Fabric: cotton Blend </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>Sleeve Length : Long Sleeve </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>Pattern:Solid</Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>Multipack:1 </Text>
                    </View>

                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Product Rating & Reviews </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black', marginTop: 10 }}>Enter Delivery Pincode </Text>

                    </View>

                </ScrollView>

                <View style={{ height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.changeImageColor(1)} >
                            {this.state.imageColor == 1 ? <Image style={{ height: 25, width: 25 }} source={require('../assets/heart1.png')} /> :
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/heart.png')} />}
                        </TouchableOpacity>
                        <Text>Wishlist</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.onSharePress} >
                            <Image style={{ height: 25, width: 25 }} source={require('../assets/share.png')} />
                        </TouchableOpacity>
                        <Text>Share</Text>

                    </View>
                    <TouchableOpacity
                        onPress={(item) => {
                            this.props.addItemToCart(item)
                            this.setModalVisible(true);
                        }}
                        style={{
                            height: 40, width: '40%', backgroundColor: '#e06024', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 10
                        }} >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        // this.closeButtonFunction()
                    }}>
                    <View
                        style={{ height: '50%', marginTop: 'auto', backgroundColor: 'white', elevation: 10, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '90%', marginTop: 20, alignSelf: 'center' }}>
                            <Text style={{ flexShrink: 17, color: 'black' }}>ADD TO CART</Text>

                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }} >
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/multiply.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ height: 80, backgroundColor: 'white', padding: 10, }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Select Size </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '80%' }}>
                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(1)}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>M</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(2)}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>L</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 3 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 3 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(3)}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>XL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 4 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 4 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(4)}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>XXL</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 10 }}>

                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Select Quantity </Text>

                            <View style={{ height: 30, width: 90, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderWidth: 0.3 }}>
                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={this.decreaseQuantity}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>-</Text>
                                </TouchableOpacity>

                                <Text style={{ fontSize: 17, color: 'black' }}>{this.state.quantity}</Text>

                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={this.increaseQuantitiy}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Total Price </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>₹342 </Text>

                        </View>

                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('CheckoutSreen')}
                            style={{
                                height: 40, width: '80%', backgroundColor: '#e06024', alignSelf: 'center',
                                justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 20
                            }} >
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

               

            </SafeAreaView>
        )
    }
}
const mapsStateToProps = (state) => {
    // console.log(state)
    return {
        cartItems: state.cart
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (item) => dispatch(addToCart(item))
    }

}

export default connect(mapsStateToProps, mapsDispatchToProps)(shirtD)