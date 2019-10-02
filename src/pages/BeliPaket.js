import React from 'react';
import {
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//////////////import pages
import internet from './subpages/internet';
import recommended from './subpages/recommended';

import Header from '../layouts/HeaderHistory';
import Footer from '../layouts/Footer';

const TabScreen = createMaterialTopTabNavigator(
  {
    ////////////pages yang ditampilkan di tab
    Internet: {screen: internet},
    Recommended: {screen: recommended},
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
        borderBottomColor: '#5499C7',
        borderBottomWidth: 3,
      },
    },
  },
);

const TabFooter = createBottomTabNavigator(
  {
    TabScreenStack: {screen: TabScreen},
  },
  {
    /////////////////Nampilin Footer
    tabBarComponent: Footer,
  },
);
//making a StackNavigator to export as default
const BeliPaket = createStackNavigator({
  TabScreen: {
    screen: TabFooter,
    navigationOptions: {
      header: <Header />,
    },
  },
});

export default createAppContainer(BeliPaket);
