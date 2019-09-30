import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { Beranda, BeliPaket, Play, Notif, MyAxis } from '../pages'

const BerandaStack = createStackNavigator(
    {
        Beranda
    },
    {
        initialRouteName : 'Beranda',
        headerMode: 'none'
    }
)

const BeliPaketStack = createStackNavigator(
    {
        BeliPaket
    },
    {
        initialRouteName: 'BeliPaket',
        headerMode: 'none'
    }
)

const PlayStack = createStackNavigator(
    {
        Play
    },
    {
        initialRouteName: 'Play',
        headerMode: 'none'
    }
)

const NotifStack = createStackNavigator(
    {
        Notif
    },
    {
        initialRouteName: 'Notif',
        headerMode: 'none'
    }
)

const MyAxisStack = createStackNavigator(
    {
        MyAxis
    },
    {
        initialRouteName: 'MyAxis',
        headerMode: 'none'
    }
)

const Router = createSwitchNavigator(
    {
        BerandaStack, BeliPaketStack, PlayStack, NotifStack, MyAxisStack
    },
    {
        initialRouteName: 'BerandaStack',
        headerMode: 'none'
    }
)

export default createAppContainer(Router)