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
      inactiveTintColor: '#D7DBDD',
      style: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 15,
      },
      indicatorStyle: {
        borderBottomColor: '#5499C7',
        borderBottomWidth: 3,
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
