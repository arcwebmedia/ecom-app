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
export default class profile extends Component {
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
                        <Text style={{ color: 'black', fontSize: 15, marginLeft: 10 }}>PROFILE</Text>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>
                <View style={{ height: 150, backgroundColor: '#f0cdbb', }}>
                  
                </View>
                <View style={{ height: 150, backgroundColor: 'white', }}>
                <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 40, marginLeft: 10,marginTop:-50}}
                        source={require('./icons/male.png')} />
                    <Text style={{fontSize:17,color:'black',fontWeight:'bold',marginLeft: 10,}}>Reeta Devi</Text>
                </View>


            </SafeAreaView>
        )
    }
}

