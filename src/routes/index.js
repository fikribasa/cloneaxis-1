import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Home,
  Package,
  Myaxis,
  Profile,
  History,
  Notification,
  ContactUs,
} from '../pages';
import {createStackNavigator} from 'react-navigation-stack';

const HomeStack = createBottomTabNavigator({
  Home,
  Package,
  Myaxis,
});

const Router = createStackNavigator({
  HomeStack: {
    screen: HomeStack,
  },
  Myaxis: {
    screen: Myaxis,
  },
  History: {
    screen: History,
  },
  Profile: {
    screen: Profile,
  },
  Notification: {
    screen: Notification,
  },
  ContactUs: {
    screen: ContactUs,
  },
});

export default createAppContainer(Router);
