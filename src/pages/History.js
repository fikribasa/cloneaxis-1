import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Header from '../layouts/HeaderHistory';

import MyAxis from './MyAxis';
import Transaction from './Transaction';
import Usage from './Usage';

const TabScreen = createMaterialTopTabNavigator(
  {
    Pemakaian: {screen: Usage},
    Transaksi: {screen: Transaction},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#633689',
      inactiveTintColor: '#D7DBDD',
      style: {
        backgroundColor: 'transparent',
        marginBottom: 8,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 14,
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 3,
      },
    },
  },
);

//making a StackNavigator to export as default
const History = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: <Header />,
    },
  },

  MyAxis: {
    screen: MyAxis,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(History);
