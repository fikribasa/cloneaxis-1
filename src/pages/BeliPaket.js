import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';

import Roaming from './Roaming';
import Internet from './Internet';
import NewBoostr from './NewBoostr';
import Footer from '../layouts/Footer';
import Recommended from './Recommended';
import TeleponDanSms from './TeleponDanSms';

const TabScreen = createMaterialTopTabNavigator(
  {
    Recommended: {screen: Recommended},
    Internet: {screen: Internet},
    NewBoostr: {screen: NewBoostr},
    TeleponDanSms: {screen: TeleponDanSms},
    Roaming: {screen: Roaming},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#633689',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'transparent',
      },
      tabStyle: {
        width: 105,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
      },
      indicatorStyle: {
        borderBottomColor: '#00E5BC',
        borderBottomWidth: 3,
      },
    },
  },
);

//making a StackNavigator to export as default
const BeliPaket = createBottomTabNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      tabBarComponent: props => <Footer {...props} />,
    },
  },
  tabBarPosition: 'bottom',
});

export default createAppContainer(BeliPaket);
