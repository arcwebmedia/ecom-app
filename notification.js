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

import { addToCart } from "./scr/redux/actions/CartAction"

import { connect } from 'react-redux';

class notification extends Component {
 
    constructor() {
        super();
        this.state = {
            clicked: 0,
            borderColor: 0,
            pressed: false,
            modalVisible: false,
            quantity:0,
            screenList: 0
        }
    }
    changeColor(val) {
        this.setState({ clicked: val })
        this.setState({ borderColor: val })
        this.setState({ screenList: val })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView>
                    <View style={{
                        height: 40, flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center', padding: 8
                    }} >
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '40%' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={{ height: 25, width: 25 }} source={require('./assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, }}>NOTIFICATION</Text>
                        </View>

                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <View style={{ flexDirection: 'row', padding: 10, width: '70%' }}>
                        <TouchableOpacity style={{
                            height: 30, width: 50, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 1 ? '#e06024' : 'black',
                            alignItems: 'center', borderWidth: 1, backgroundColor: this.state.clicked == 1 ? '#f7af8d' : 'white'
                        }}
                            onPress={() => this.changeColor(1)}>
                            <Text style={{ color: 'black' }}>Order</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 30, width: 60, borderRadius: 10, justifyContent: 'center', borderColor: this.state.borderColor == 2 ? '#e06024' : 'black',
                            alignItems: 'center', borderWidth: 1,marginLeft:10, backgroundColor: this.state.clicked == 2 ? '#f7af8d' : 'white'
                        }}
                            onPress={() => this.changeColor(2)}>
                            <Text style={{ color: 'black' }}>Activity</Text>
                        </TouchableOpacity>

                     

                    </View>
                    {this.state.screenList == '1' ?
                        <View style={{ marginTop: 10, width: '100%', height: 350, elevation: 5, backgroundColor: 'white' }} >
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, padding: 10 }}>Order</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, alignSelf: 'center' }} >
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>No new notification</Text>
                                <Text style={{ color: 'gray', fontSize: 15, }}>We will notify you when somthing arrives </Text>
                            </View>
                        </View>
                        :
                            <View style={{ marginTop: 10, width: '100%', height: 350, elevation: 5, backgroundColor: 'white' }} >
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, padding: 10 }}>Activity</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, alignSelf: 'center' }} >
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>No new notification</Text>
                                    <Text style={{ color: 'gray', fontSize: 15, }}>We will notify you when somthing arrives </Text>
                                </View>
                            </View> 
                         }



                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default(notification);