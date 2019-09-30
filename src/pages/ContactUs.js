import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Advice from './Advice';
import Complaint from './Complaint';

//import TabScreen from './pages/TabScreen';

//Making TabNavigator which will bw called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export
const TabScreen = createMaterialTopTabNavigator(
  {
    Saran: {screen: Advice},
    Keluhan: {screen: Complaint},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#633689',
      inactiveTintColor: '#F8F8F8',
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

//making a StackNavigator to export as default
const ContactUs = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    // navigationOptions: {
    //     header: null,
    //   headerStyle: {
    //     textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // },
    //   headerTintColor: '#633689',
    //   title: 'History',
  },
});

export default createAppContainer(ContactUs);
