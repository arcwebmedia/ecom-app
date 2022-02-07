import 'react-native-gesture-handler';
import React from "react"

import {AppRegistry} from 'react-native';
import StackNavigator from './Stack';
import {name as appName} from './app.json';
import {Provider} from  "react-redux"

import store from "./scr/redux/store"

const reduxStore = () => {
    return (
        <Provider store={store} >
        <StackNavigator />
    </Provider>
    )
}

AppRegistry.registerComponent(appName, ()=>reduxStore);