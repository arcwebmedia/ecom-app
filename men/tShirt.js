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

import { addToCart } from "../scr/redux/actions/CartAction"
import { getProduct } from "../scr/redux/actions/productAction"

import { connect } from 'react-redux';

class tShirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myButton: true,
            myImage: require('../assets/heart.png'),
            categoryProduct: []

        };
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
    componentDidMount() {
        this.fetchByCategory("T-Shirts")
    }

    async fetchByCategory(category) {
        await fetch(`http://192.168.1.11:4001/api/v1/products?category=${category}`, {
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
                            <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, }}>t-Shirt</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
                        <TouchableOpacity >
                            <Image style={{ height: 20, width: 20 }} source={require('../assets/search.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('wishlist')} >
                            <Image style={{ height: 20, width: 20 }} source={require('../assets/heart.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} >
                            <Image style={{ height: 25, width: 25 }} source={require('../assets/cart.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>


                <FlatList
                    numColumns={2}
                    data={this.state.categoryProduct}
                    renderItem={({ item }) => <View style={{ marginTop: 10, justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", {
                            id: item._id,
                            price: item.price,
                            name: item.name,
                            rating: item.ratings,
                            reviews: item.numOfReviews,
                            discription: item.discription,
                            Stock: item.Stock
                        })}>
                            <View style={{
                                height: 25, width: 25, backgroundColor: 'white', borderRadius: 12, position: 'absolute', right: 10, marginTop: 10,
                                justifyContent: 'center', alignItems: 'center', opacity: 0.5
                            }}>
                                <TouchableOpacity onPress={() => this.onBtnClick()}>
                                    <Image style={{ height: 20, width: 20, }} source={this.state.myImage} />
                                </TouchableOpacity>
                            </View>
                            <Image style={{ height: 200, width: '95%', borderWidth: 1, borderColor: 'black' }} source={item.img} />

                            <View style={{
                                height: 20, width: 40, backgroundColor: 'white', marginTop: 178, position: 'absolute', right: 10,
                                justifyContent: 'center', alignItems: 'center', borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 10, color: 'black' }}>+{item.Stock}more</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ fontSize: 10, color: 'gray' }}>{item.name}</Text>
                                <TouchableOpacity onPress={this.onSharePress} >
                                    <Image style={{ height: 20, width: 20 }} source={require('../icons/share.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'black', }}>{item.price} </Text>
                            <TouchableOpacity style={{
                                height: 25, width: 90, borderRadius: 10, justifyContent: 'center',
                                alignItems: 'center', backgroundColor: '#ebe8e8',
                            }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Free Delivery </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>}>

                </FlatList>
            </SafeAreaView>
        )
    }
}
const mapsStateToProps = (state) => {
    console.log(state.product)
    return {
        product: state.product.products
    }
}


const mapsDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProduct())
    }

}
export default connect(mapsStateToProps, mapsDispatchToProps)(tShirt)


