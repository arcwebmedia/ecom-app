import React, { Component } from 'react';
import axios from "axios"

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
import { connect } from 'react-redux';

import { register } from "./scr/redux/actions/userAction"

class App extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  async onClick() {
    if (this.state.email == '') {
      alert('please enter your email')
    } else if (this.state.password == '') {
      alert('please enter your password')
    } else {
      var formData = new FormData()
      formData.append("email", this.state.email)
      formData.append("password", this.state.password)
      formData.append("name", "nonny")
      console.log(this.state.email)
     

      // this.props.registerUser(formData);
       await fetch("http://192.168.1.5:4001/api/v1/register",{
         method:"post",
         body:formData,
         headers:{
           "Content-Type":"multipart/form-data"
         }
       }).then((respon) => respon.json())
       .then ((respJson) => {
           this.setState({user:respJson})
       })
       .catch((error) => console.error(error));
   

      console.log(this.props.user.isAuthenticated)
      
      this.props.navigation.navigate('HomeScreen')
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
            height: 60, width: '80%', alignSelf: 'center', marginTop: 10, borderRadius: 20, color: 'white',
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
            borderColor: 'white', borderWidth: 2, backgroundColor: '#11354a', fontSize: 17, opacity: 0.3
          }}
            placeholder='Password'
            placeholderTextColor='white'
            secureTextEntry={true}
            onChangeText={(p) => this.setState({ password: p })}
            value={this.state.password}>

          </TextInput>
          <TouchableOpacity onPress={() => this.onClick()} style={{
            height: 60, width: '80%', backgroundColor: '#e06024', alignSelf: 'center', marginTop: 20,
            justifyContent: 'center', alignItems: 'center', borderRadius: 20, elevation: 8,
          }}
          >
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Sign in</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10, }}>
            <Text style={{ fontSize: 17, color: '#11354a' }}>Forget your password ?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} >
              <Text style={{ fontSize: 15, color: '#d9450b', alignSelf: 'center', fontWeight: 'bold' }}> SignUp</Text>
            </TouchableOpacity>
          </View>

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

const mapPropsToState = (state) => {
  console.log(state.user)
  return {
    user: state.user
  }
}

const mapsDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(register(data))
  }
}

export default connect(mapPropsToState, mapsDispatchToProps)(App)