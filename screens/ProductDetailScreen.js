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
import * as Animatable from 'react-native-animatable';

import { addToCart } from "../scr/redux/actions/CartAction"

import { connect } from 'react-redux';
const shareOptions = {
    title: 'Title',
    message: 'Message to share',
    url: 'www.example.com',
    subject: 'Subject'
};

var DATA = [
    { text: 'M' },
    { text: 'L' },
    { text: 'XL' },
    { text: 'XXL' },
]
class Details extends Component {
    onSharePress = () => Share.share(shareOptions);
    constructor() {
        super();
        this.state = {
            clicked: 0,
            borderColor: 0,
            pressed: false,
            modalVisible: false,
            quantity: '0',
            myButton: true,
            myImage: require('../assets/heart.png'),
            selectSize: '',
            sizeError: ''

        }
    }
    sizeValid() {
        if (this.state.selectSize == '') {
            this.setState({ sizeError: 'Please select size to be Continue' })
        } if (!this.state.selectSize == '') {
            this.props.navigation.navigate('Address')
        }
    }
    changeColor(val , sizeVal) {
        this.setState({ clicked: val })
        this.setState({ borderColor: val })
        this.setState({selectSize:sizeVal})
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisible2(visible) {
        this.setState({ modalVisible2: visible });
    }
    decreaseQuantity = () => {
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
    onBtnClick() {
        this.setState({ myButton: !this.state.myButton })
        if (this.state.myButton == false) {
            this.setState({ myImage: require('../assets/heart.png') })
        }
        if (this.state.myButton == true) {
            this.setState({ myImage: require('../assets/heart1.png') })
        }
    }
    render() {
        const { id, price, name, reviews, rating, img, Stock, discription } = this.props.route.params;
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{
                        height: 40, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 8
                    }} >
                        <View style={{ flexDirection: 'row', width: '70%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, }}>{name}</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
                            <TouchableOpacity >
                                <Image style={{ height: 20, width: 20 }} source={require('../assets/search.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')}>
                                <Image style={{ height: 20, width: 20 }} source={require('../assets/heart.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                                <Image style={{ height: 25, width: 25 }} source={require('../assets/cart.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <View style={{ backgroundColor: 'white' }}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'white' }} >
                            <Image style={{ height: 250, width: 200, borderWidth: 1, borderColor: 'red' }} source={img} />
                        </View>
                        <View style={{ justifyContent: 'center', marginTop: 20, backgroundColor: 'white', marginLeft: 20 }} >
                            <Text>{Stock} Similar Product</Text>
                            <Image style={{ height: 50, width: 40, borderWidth: 1, borderColor: 'red', marginTop: 10, borderRadius: 10 }} source={img} />
                        </View>

                        <Text style={{ fontSize: 17, marginLeft: 20, color: 'gray', marginTop: 10, }}>{name} </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, color: 'black', marginTop: 10, }}>{price} </Text>
                        <TouchableOpacity style={{
                            height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                            alignItems: 'center', backgroundColor: '#ebe8e8', marginLeft: 10, marginTop: 10
                        }}>
                            <Text style={{ color: 'black', fontSize: 13 }}>Free Delivery </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 20, marginTop: 10 }}>
                            <Text style={{ color: 'black' }}>{rating}</Text>
                            <Text style={{ color: 'black', marginLeft: 10 }}>{reviews}</Text>
                        </View>
                    </View>

                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Select Size </Text>

                        {/* <FlatList
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item }) => 
                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == true ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == true ? '#f7af8d' : 'white',marginLeft:20,marginTop:10
                                }}
                                    onPress={() => this.changeColor(1)}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.text}</Text>
                                </TouchableOpacity>
                         

                            }>
                        </FlatList> */}


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '80%' }}>
                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(1,'M')}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>M</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(2,'L')}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>L</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 3 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 3 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(3, "XL")}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>XL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 4 ? '#e06024' : 'black',
                                alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 4 ? '#f7af8d' : 'white'
                            }}
                                onPress={() => this.changeColor(4,'XXL')}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>XXL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Sold By </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginLeft: 10 }}>
                            <View style={{ justifyContent: 'center', }}>
                                <TouchableOpacity style={{
                                    height: 25, width: 50, borderRadius: 10, justifyContent: 'center',
                                    alignItems: 'center', borderWidth: 1, borderColor: "blue", marginTop: 10
                                }}>
                                    <Text style={{ color: 'blue', fontSize: 13 }}>3.8 </Text>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 13, color: 'black' }}>1.2 Lakh ratings</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>1,078</Text>
                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, }}>Followers</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>66</Text>
                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, }}>Products</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 150, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Product Details </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black' }}>{discription} </Text>

                    </View>
                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Product Rating & Reviews </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black', marginTop: 10 }}>Enter Delivery Pincode </Text>

                    </View>
                    <View style={{ height: 100, backgroundColor: 'white', padding: 10, marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Check Delivery Date </Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, color: 'black', marginTop: 10 }}>Enter Delivery Pincode </Text>

                    </View>

                </ScrollView>

                <View style={{ height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.onBtnClick()}>
                            <Image style={{ height: 25, width: 25, }} source={this.state.myImage} />
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

                            <Text style={{ fontSize: 12, color: 'red', marginLeft: 10, marginTop: 10 }}>{this.state.sizeError}</Text>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '80%', }}>
                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(1,'M')}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>M</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(2,"L")}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>L</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 3 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 3 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(3,'XL')}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>XL</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    height: 30, width: 40, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 4 ? '#e06024' : 'black',
                                    alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 4 ? '#f7af8d' : 'white'
                                }}
                                    onPress={() => this.changeColor(4,'XXL')}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>XXL</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 30 }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 10 }}>

                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Select Quantity </Text>

                            <View style={{ height: 30, width: 90, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderWidth: 0.3 }}>
                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={this.decreaseQuantity}>
                                    <Text style={{ fontSize: 15 }}>-</Text>
                                </TouchableOpacity>

                                <Text>{this.state.quantity}</Text>

                                <TouchableOpacity style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', }}
                                    onPress={this.increaseQuantitiy}>
                                    <Text style={{ fontSize: 15 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>Total Price </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: 'black' }}>₹342 </Text>

                        </View>

                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10 }}></View>

                        <TouchableOpacity style={{
                            height: 40, width: '80%', backgroundColor: '#e06024', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 20
                        }}
                            onPress={() => this.sizeValid()} >
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>


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

export default connect(mapsStateToProps, mapsDispatchToProps)(Details)