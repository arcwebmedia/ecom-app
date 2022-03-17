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

export default class EditProfile extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    height: 40, flexDirection: 'row',
                    justifyContent: 'space-between', alignItems: 'center', padding: 8
                }} >
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 20 }}>EDIT PROFILE INFORMATION</Text>
                    </View>

                </View>
                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                <ScrollView>
                    <View style={{
                        width: '100%', height: 1000, elevation: 5, backgroundColor: 'white', marginBottom: 20,
                        marginTop: 10
                    }} >
                        <View style={{
                            height: 180, alignItems: 'center', padding: 8, justifyContent: 'center'
                        }} >
                            <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 40 }}
                                source={require('./icons/male.png')} />
                            <Text style={{ color: 'tomato', fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>ADD PICTURE</Text>
                        </View>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Full Name</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'>
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Phone Number</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Email ID</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Gender</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Language Spoken</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Occupation</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>About Me</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>My Bussiness Name</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>Pin Code</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>City</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>
                        <Text style={{ color: 'gray', fontSize: 12, marginLeft: 20, marginTop: 10 }}>State</Text>
                        <TextInput style={{
                            height: 40, width: '90%', color: 'black', fontSize: 12, borderBottomWidth: 0.5, fontWeight: 'bold', borderColor: 'gray', alignSelf: 'center'
                        }}
                            placeholder=''
                            placeholderTextColor='black'
                        >
                        </TextInput>

                    </View>
                </ScrollView>
                <View style={{ height: 80, backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'center', }}>

                    <TouchableOpacity
                        style={{
                            height: 40, width: '90%', backgroundColor: '#e06024', alignSelf: 'center',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 8
                        }} >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Save</Text>
                    </TouchableOpacity>
                </View>




            </SafeAreaView>
        )
    }
}