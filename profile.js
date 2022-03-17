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
import ImagePicker from 'react-native-image-crop-picker';

const choosephotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      compressImageMaxHeight: 400,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
    });
  }
  
  
export default class profile extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ScrollView>


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
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '30%' }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditProfile')} >
                                <Text style={{ color: '#e06024', fontSize: 15, fontWeight: 'bold' }}>EDIT PROFILE</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 0.5, borderColor: 'gray' }}></View>

                    <View style={{ height: 150, backgroundColor: '#f0cdbb', }}></View>

                    <View style={{ height: 300, backgroundColor: 'white', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 80, width: 80, borderWidth: 1, borderColor: 'black', borderRadius: 40, marginLeft: 10, marginTop: -50 }}
                                source={require('./icons/male.png')} />
                            <TouchableOpacity style={{
                                height: 30, width: 30, backgroundColor: '#FAF8F3', justifyContent: 'center', alignItems: 'center', borderRadius: 15,
                                marginLeft: -25, borderWidth: 0.5, borderColor: 'gray'
                            }}
                                onPress={choosephotoFromGallery}>
                                <Image style={{ height: 20, width: 20 }} source={require('./icons/camra.png')} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Reeta Devi</Text>
                        <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, marginTop: 10 }}>Sahibzada Ajit Singh Nagar, CHANDIGARH</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginLeft: 10 }}>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>37</Text>
                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, }}>Graduate</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>2</Text>
                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, }}>Followers</Text>
                            </View>
                            <View style={{ justifyContent: 'center', }}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>0</Text>
                                <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, }}>Following</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 0.5, borderColor: 'gray', marginTop: 10, width: '90%', alignSelf: 'center' }}></View>

                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>About Me</Text>
                        <Text style={{ fontSize: 13, color: 'black', marginLeft: 10, marginTop: 10 }}>Share Your journey on Dreams Bazzar with other customers</Text>
                    </View>

                    <View style={{ height: 150, backgroundColor: 'white', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>My Journey</Text>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'white', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>My League</Text>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'white', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 20 }}>My Exclusive Benifits</Text>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

