import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Advice from './Advice';
import Complaint from './Complaint';

import Header from '../layouts/HeaderHistory';

const TabScreen = createMaterialTopTabNavigator(
  {
    Saran: {screen: Advice},
    Keluhan: {screen: Complaint},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    backBehavior: 'history',
    tabBarOptions: {
      activeTintColor: '#633689',
      inactiveTintColor: '#D2B4DE',
      style: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
      },
      indicatorStyle: {
        borderBottomColor: '#00CCCC',
        borderBottomWidth: 2,
      },
    },
  },
);

// making a StackNavigator to export as default
const ContactUs = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: <Header />,
    },
    tabBarComponent: {},
  },
});

export default createAppContainer(ContactUs);
