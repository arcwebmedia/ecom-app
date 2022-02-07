import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { Component } from 'react';

import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    Image, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SideMenu({ ...props }) {
    const navigation = useNavigation()
    const showAlert = () => {
        Alert.alert(
            'LogOut',
            'Sure,You want to LogOut',
            [
                {
                    text: "Yes",
                    onPress: () => navigation.navigate('App')

                },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
            ]
        );

    }
    return (
        <DrawerContentScrollView {...props}>
            <SafeAreaView style={{ flex: 1, }}>

                <View style={{ height: 150, width: '100%', backgroundColor: '#e06024', borderTopLeftRadius: 20,
                 borderBottomRightRadius: 20,justifyContent:'center', }}>
                    <Image style={{height:80,width:80,marginLeft:10}} source={require('./assets/profile.png')} />

                </View>


                <View style={{ marginTop: 10, marginLeft: 10 }} >

                    <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, color: 'black' }} >Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('About')} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, color: 'black' }}>About Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Men')} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, color: 'black' }}>Men</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Women')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, color: 'black' }}>Women</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('search')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15, color: 'black' }}>Contact</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ borderBottomWidth: 0.5, marginTop: 30 }}></View>
                <TouchableOpacity onPress={showAlert}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginLeft: 10, color: 'black' }}>LogOut</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </DrawerContentScrollView>
    )

}
export default SideMenu;