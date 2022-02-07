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
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            Name: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <StatusBar backgroundColor='#e06024' />
                <ImageBackground style={{ flex: 1, opacity: 0.4 }}
                    imageStyle={{ borderRadius: 30 }}
                    source={require('./assets/Image.png')}></ImageBackground>

                <View style={{
                    height: 100, width: '100%', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'flex-end', position: 'absolute', top: 0
                }}>

                    <View style={{ flexDirection: 'row', width: '35%', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: '#e06024' }}></View>
                        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: '#11354a', position: 'absolute', right: -30, }}></View>

                    </View>
                </View>

                <View style={{
                    height: '90%', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 90
                }}>
                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                        <Image style={{ height: 200, width: 200 }} source={require('./assets/logo.png')} />
                    </View>
                    <TextInput style={{
                        height: 60, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 20, paddingLeft: 20, color: 'white',
                        borderColor: 'black', borderColor: 'white', borderWidth: 2, backgroundColor: '#11354a', fontSize: 17, opacity: 0.3
                    }}
                        placeholder='Name'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        onChangeText={(n) => this.setState({ Name: n })}
                        value={this.state.Name}>
                    </TextInput>
                    <TextInput style={{
                        height: 60, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 20, color: 'white',
                        borderColor: 'white', borderWidth: 2, backgroundColor: '#11354a', paddingLeft: 20, fontSize: 17,
                        opacity: 0.3
                    }}
                        placeholder='Your Email'
                        placeholderTextColor='white'
                        onChangeText={(e) => this.setState({ email: e })}
                        value={this.state.email}>
                    </TextInput>
                    <TextInput style={{
                        height: 60, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 20, paddingLeft: 20, color: 'white',
                        borderColor: 'black', borderColor: 'white', borderWidth: 2, backgroundColor: '#11354a', fontSize: 17, opacity: 0.3
                    }}
                        placeholder='Password'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        onChangeText={(p) => this.setState({ password: p })}
                        value={this.state.password}>

                    </TextInput>
                    <TouchableOpacity style={{
                        height: 60, width: '80%', backgroundColor: '#e06024', alignSelf: 'center', marginTop: 20,
                        justifyContent: 'center', alignItems: 'center', borderRadius: 20, elevation: 8,
                    }}
                    >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{
                        height: 100, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                        marginTop: 40
                    }}>
                        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: '#11354a', position: 'absolute', left: -20, }}></View>
                        <View style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: '#e06024', marginLeft: 90 }}></View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}



