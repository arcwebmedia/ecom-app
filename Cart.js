import React, { Component, forwardRef } from 'react';

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
    Modal
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
            quantity: '0',
            modalVisible: false,
        }
    }
    detcreaseQuantity = () => {
        if (this.state.quantity <= 0) {
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
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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

                    <View style={{ height: 200, backgroundColor: 'white', elevation: 8, }}>
                        <View style={{
                            height: 50, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'space-between',
                            alignItems: 'center', padding: 8
                        }} ></View>

                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>
                        <TouchableOpacity style={{ flexDirection: 'row', padding: 10 }}
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Image style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                                source={require('./assets/s1.png')} />

                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '75%', }}>
                                    <Text style={{ fontSize: 18, color: 'black', marginLeft: 20 }}>Shirt for Men</Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                        <Image style={{ height: 25, width: 25 }} source={require('./icons/moveRight.png')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>Size: XL</Text>
                                    <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>
                                        <Text style={{ fontSize: 10, color: 'gray', }}>=   </Text> Qty:1</Text>
                                </View>

                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>499.00</Text>

                            </View>
                        </TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'gray', marginTop: 10 }}></View>
                        <Text style={{ fontSize: 12, color: 'black', marginLeft: 10, marginTop: 10 }}>Supplier : Calshay Fashion</Text>
                    </View>

                    <View style={{ height: 200, backgroundColor: 'white', elevation: 8, marginTop: 10, padding: 15 }}>
                        <Text style={{ fontSize: 15, color: 'black', }}>Price Details</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ fontSize: 13, color: 'gray', }}>Total Product Price</Text>
                            <Text style={{ fontSize: 13, color: 'gray', }}> ₹499.00</Text>

                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 20 }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Order Total </Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}> ₹499.00</Text>

                        </View>
                    </View>

                    <View style={{
                        height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between',
                        position: 'absolute', bottom: 0, width: '100%'
                    }}>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}> ₹499.00</Text>
                            <Text style={{ fontSize: 13, color: '#e06024', fontWeight: 'bold' }}>VIEW PRICE DETAILS</Text>
                        </View>

                        <TouchableOpacity
                            style={{
                                height: 40, width: '40%', backgroundColor: '#e06024', alignSelf: 'center',
                                justifyContent: 'center', alignItems: 'center', borderRadius: 10
                            }}
                            onPress={() => this.props.navigation.navigate('Address')}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            // this.closeButtonFunction()
                        }}>

                        <View style={{ flex: 1, backgroundColor: '#00000099', }}>

                            <View
                                style={{ height: '50%', marginTop: 'auto', backgroundColor: 'white', elevation: 10, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>

                                <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'flex-end', marginRight: 10 }}>
                                    <TouchableOpacity  onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }} >
                                        <Image style={{ height: 20, width: 20, }} source={require('./assets/multiply.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', padding: 10 }}>
                                    <Image style={{ height: 70, width: 70, borderWidth: 1, borderColor: 'black', borderRadius: 10 }}
                                        source={require('./assets/s1.png')} />

                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '72%', marginLeft: 20 }}>
                                            <Text style={{ fontSize: 18, color: 'black', }}>Shirt for Men</Text>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#e06024', }}>REMOVE</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>Size: XL</Text>
                                            <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>
                                                <Text style={{ fontSize: 10, color: 'gray', }}>=   </Text> Qty</Text>

                                            <View style={{
                                                height: 20, width: 80, justifyContent: 'space-between', alignItems: 'center',
                                                flexDirection: 'row', borderWidth: 0.3, marginLeft: 10
                                            }}>
                                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={this.decreaseQuantity}>
                                                    <Text style={{ fontSize: 15 }}>-</Text>
                                                </TouchableOpacity>

                                                <Text style={{ fontWeight: 'bold' }}>{this.state.quantity}</Text>

                                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                                    onPress={this.increaseQuantitiy}>
                                                    <Text style={{ fontSize: 15 }}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <Text style={{ fontSize: 13, color: 'black', marginLeft: 20 }}>499.00</Text>

                                    </View>
                                </View>

                                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Total Price </Text>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>₹499 </Text>

                                </View>

                                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                                <TouchableOpacity style={{
                                    height: 40, width: '80%', backgroundColor: '#e06024', alignSelf: 'center',
                                    justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 20
                                }}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }} >
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </Modal>



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