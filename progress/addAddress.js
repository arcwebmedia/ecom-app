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

export default class addAddress extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={require('../assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>DELIVERY ADDRESS</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                <View style={{ height: 40, flexDirection: 'row', backgroundColor: 'gray', justifyContent: 'space-between', alignItems: 'center', padding: 8 }} ></View>
                <ScrollView>

                    <View style={{ width: '100%', height: 210, elevation: 5, backgroundColor: 'white', }} >

                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }} >
                            <Image style={{ height: 25, width: 25 }} source={require('../icons/phone.png')} />
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>Contact Details</Text>
                        </View>

                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Name</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Phone Number</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                    </View>

                    <View style={{
                        width: '100%', height: 420, elevation: 5, backgroundColor: 'white',marginBottom:20,
                        marginTop: 10
                    }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 10 }} >
                            <Image style={{ height: 25, width: 25 }} source={require('../icons/location.png')} />
                            <Text style={{ color: 'black', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>Address</Text>
                        </View>

                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>House no.Building Name</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Road Name/Area/Colony</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Pin Code</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>City</Text>
                                <TextInput style={{
                                    height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                                }}
                                    placeholder=''
                                    placeholderTextColor='black'
                                >
                                </TextInput>
                            </View>

                            <View style={{ width: '50%' }}>
                                <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>State</Text>
                                <TextInput style={{
                                    height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                                }}
                                    placeholder=''
                                    placeholderTextColor='black'
                                >
                                </TextInput>
                            </View>
                        </View>

                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20, marginTop: 10 }}>Nearby Location (optional)</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 17, borderBottomWidth: 1, alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                    </View>


                </ScrollView>
                <View style={{ height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent:'center', }}>
                    
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Address')
                        }
                        style={{
                            height: 40, width: '90%', backgroundColor: '#e06024', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 8
                        }} >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Save address and Continue</Text>
                    </TouchableOpacity>
                </View>




            </SafeAreaView>
        )
    }
}