import React from 'react';
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Internet from './Internet';
import Recommended from './Recommended';
import NewBoostr from './NewBoostr';
import TeleponDanSms from './TeleponDanSms';
import Roaming from './Roaming';
import Header from '../layouts/HeaderHistory'

const TabScreen = createMaterialTopTabNavigator(
    {
        Recommended: { screen: Recommended },
        Internet: { screen: Internet },
        NewBoostr: { screen: NewBoostr },
        TeleponDanSms: { screen: TeleponDanSms },
        Roaming: { screen: Roaming }
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#633689',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'transparent',
            },
            labelStyle: {
                textAlign: 'center',
                fontSize: 10,
                fontWeight: 'bold'
            },
            indicatorStyle: {
                borderBottomColor: '#00E5BC',
                borderBottomWidth: 3,
            },
        },
    },
);

//making a StackNavigator to export as default
const BeliPaket = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        tabBarOptions : {
            header: <Header />
        }
    },
});

export default createAppContainer(BeliPaket);
