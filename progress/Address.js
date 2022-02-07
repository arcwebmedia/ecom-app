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

export default class Address extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25}} source={require('../assets/back.png')}/>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>DELIVERY ADDRESS</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                <View style={{ height: 40, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'space-between', alignItems: 'center', padding: 8 }} ></View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('addAddress')
                } >
                    <Text style={{ color: '#e06024', fontSize: 15, marginLeft: 20,marginTop:10 ,fontWeight:'bold'}}>+ ADD TO NEW ADDRESS</Text>
                </TouchableOpacity>

                <View style={{ height: 220, width: '100%', backgroundColor: '#cddef7', justifyContent: 'space-between', marginTop: 10, }} >
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 20,marginTop:10 ,fontWeight:'bold'}}>Reeta Devi</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>866,phase 4, 59 sector,mohali panjab,160059</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>+91 9805582352</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('addAddress')
                } >
                    <Text style={{ color: '#e06024', fontSize: 15, marginLeft: 20,marginTop:10 ,fontWeight:'bold'}}>EDIT</Text>
                </TouchableOpacity>

                    <TouchableOpacity  style={{
                        height: 50, width: '90%', backgroundColor: '#e06024', alignSelf: 'center', marginTop: 10,
                        justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 8,marginBottom:20
                    }}
                    onPress={()=>this.props.navigation.navigate('payment')} >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Deliver to this Address</Text>
                    </TouchableOpacity>

                </View>



            </SafeAreaView>
        )
    }
}