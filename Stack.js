import React, { Component } from 'react';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from './App';
import Home from './Home';
import profile from './profile';
import SideMenu from './customDrawer';
import SignUp from './SignUp';
import Men from './men/Men';
import Women from './women/Women';
import Newarrival from './men/Newarrival';
import Brand from './Brand';
import Cart from './Cart';
import Categories from './Categories';
import Order from './Order';
import tShirt from './men/tShirt';
import jeans from './men/jeans';
import Details from './men/Details';
import jeansD from './men/jeansD';
import shirtD from './men/shirtD';
import Shirts from './men/Shirts';
import Address from './progress/Address';
import Wshirt from './women/Wshirt';
import WomenD from './women/WomenD';
import womenT from './women/womenT';
import womenJ from './women/womenJ';
import womenSD from './women/womenSD';
import womenTD from './women/womenTD';
import womenJD from './women/womenJD';
import womenL from './women/womenL';
import womenLD from './women/womenLD';
import womenK from './women/womenK';
import womenKD from './women/womenKD';
import womenTop from './women/womenTop';
import wTopD from './women/wTopD';
import womenP from './women/womenP';
import womenPD from './women/womenPD';
import womenLower from './women/womenLower';
import wLowerD from './women/wLowerD';
import womenTrackSuit from './women/womenTrackSuit';
import wTSD from './women/wTSD';
import payment from './progress/payment';
import orderSummary from './progress/orderSummary';
import addAddress from './progress/addAddress';
import Checkout from './scr/screens/CheckoutScreen';
import notification from './notification';
import Wishlist from './Wishlist';
import Account from './Account';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name='App' component={App} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Men' component={Men} />
          <Stack.Screen name='Women' component={Women} />
          <Stack.Screen name='Newarrival' component={Newarrival} />
          <Stack.Screen name='Brand' component={Brand} />
          <Stack.Screen name='Cart' component={Cart} />
          <Stack.Screen name='tShirt' component={tShirt} />
          <Stack.Screen name='jeans' component={jeans} />
          <Stack.Screen name='Details' component={Details} />
          <Stack.Screen name='jeansD' component={jeansD} />
          <Stack.Screen name='shirtD' component={shirtD} />
          <Stack.Screen name='shirts' component={Shirts} />
          <Stack.Screen name='WomenD' component={WomenD} />
          <Stack.Screen name='womenSD' component={womenSD} />
          <Stack.Screen name='womenTD' component={womenTD} />
          <Stack.Screen name='womenJD' component={womenJD} />
          <Stack.Screen name='womenLD' component={womenLD} />
          <Stack.Screen name='womenKD' component={womenKD} />
          <Stack.Screen name='womenPD' component={womenPD} />
          <Stack.Screen name='wTrackSuit' component={wTSD} />
          <Stack.Screen name='wTop' component={wTopD} />
          <Stack.Screen name='wLower' component={wLowerD} />
          <Stack.Screen name='womenT' component={womenT} />
          <Stack.Screen name='womenJ' component={womenJ} />
          <Stack.Screen name='womenL' component={womenL} />
          <Stack.Screen name='womenK' component={womenK} />
          <Stack.Screen name='womenP' component={womenP} />
          <Stack.Screen name='addAddress' component={addAddress} />
          <Stack.Screen name='orderSummary' component={orderSummary} />
          <Stack.Screen name='womenTop' component={womenTop} />
          <Stack.Screen name='womenLower' component={womenLower} />
          <Stack.Screen name='womenTrackSuit' component={womenTrackSuit} />
          <Stack.Screen name='Wshirt' component={Wshirt} />
          <Stack.Screen name='Address' component={Address} />
          <Stack.Screen name='payment' component={payment} />
          <Stack.Screen name='HomeScreen' component={myTab} />
          <Stack.Screen name='CheckoutSreen' component={Checkout} />
          <Stack.Screen name='notification' component={notification} />
          <Stack.Screen name='wishlist' component={Wishlist} />
          <Stack.Screen name='profile' component={profile} />
        </Stack.Navigator>
      </NavigationContainer>
    )
    // function MyDrawer() {
    //   return (
    //     <Drawer.Navigator  drawerContent={(props) => <SideMenu {...props} />}
    //     drawerStyle={{ width: '80%' }}
    //      screenOptions={{
    //       headerShown: false
    //     }} >
    //       <Drawer.Screen name='Homescreen' component={Home} />

    //     </Drawer.Navigator>
    //   );
    // }

    function myTab() {
      return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 10, },
          tabBarStyle: {},
        }}>
          <Tab.Screen name='Home' component={Home}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/home.png')} />
              ),
            }} />
          <Tab.Screen name='Categories' component={Categories}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/category.png')} />
              ),
            }} />
          <Tab.Screen name='Order' component={Order}
            options={{
              tabBarIcon: () => (
                <Image source={require('./assets/bag.png')} />
              ),
            }} />

          <Tab.Screen name='account' component={Account}
            options={{
              tabBarIcon: () => (
                <Image style={{ height: 30, width: 30 }} source={require('./assets/account.png')} />
              ),
            }} />

        </Tab.Navigator>
      );
    }
  }
}
