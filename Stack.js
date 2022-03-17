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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import App from './App';
import Home from './Home';
import profile from './profile';
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
import Shirts from './men/Shirts';
import Address from './progress/Address';
import womenShirts from './women/womenShirts';
import womenTshirts from './women/womenTshirts';
import womenJeans from './women/womenJeans';
import womenLegging from './women/womenLegging';
import womenKurtis from './women/womenKurtis';
import womenTop from './women/womenTop';
import womenPlazzo from './women/womenPlazzo';
import womenLower from './women/womenLower';
import womenTrackSuit from './women/womenTrackSuit';
import payment from './progress/payment';
import orderSummary from './progress/orderSummary';
import addAddress from './progress/addAddress';
import Checkout from './screens/CheckoutScreen';
import notification from './notification';
import Wishlist from './Wishlist';
import Account from './Account';
import EditProfile from './EditProfile';



const Stack = createNativeStackNavigator();
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
          <Stack.Screen name='shirts' component={Shirts} />
          <Stack.Screen name='womenTshirts' component={womenTshirts} />
          <Stack.Screen name='womenJeans' component={womenJeans} />
          <Stack.Screen name='womenLegging' component={womenLegging} />
          <Stack.Screen name='womenKurtis' component={womenKurtis} />
          <Stack.Screen name='womenPlazzo' component={womenPlazzo} />
          <Stack.Screen name='addAddress' component={addAddress} />
          <Stack.Screen name='orderSummary' component={orderSummary} />
          <Stack.Screen name='womenTop' component={womenTop} />
          <Stack.Screen name='womenLower' component={womenLower} />
          <Stack.Screen name='womenTrackSuit' component={womenTrackSuit} />
          <Stack.Screen name='womenShirts' component={womenShirts} />
          <Stack.Screen name='Address' component={Address} />
          <Stack.Screen name='payment' component={payment} />
          <Stack.Screen name='HomeScreen' component={myTab} />
          <Stack.Screen name='CheckoutSreen' component={Checkout} />
          <Stack.Screen name='notification' component={notification} />
          <Stack.Screen name='wishlist' component={Wishlist} />
          <Stack.Screen name='profile' component={profile} />
          <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    )

    function myTab() {
      return (
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',

        }}>
          <Tab.Screen name='Home' component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image style={{ height: 25, width: 25, tintColor: focused ? 'tomato' : 'black' }}
                  source={require('./assets/home.png')} />
              ),
            }} />
          <Tab.Screen name='Categories' component={Categories}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image style={{ height: 25, width: 25, tintColor: focused ? 'tomato' : 'black' }}
                  source={require('./assets/category.png')} />
              ),
            }} />
          <Tab.Screen name='Order' component={Order}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image style={{ height: 25, width: 25, tintColor: focused ? 'tomato' : 'black' }}
                  source={require('./assets/bag.png')} />
              ),
            }} />

          <Tab.Screen name='Account' component={Account}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image style={{ height: 25, width: 25, tintColor: focused ? 'tomato' : 'black' }}
                  source={require('./assets/account.png')} />
              ),
            }} />

        </Tab.Navigator>
      );
    }
  }
}
