import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Beranda,
  BeliPaket,
  Play,
  Notif,
  MyAxis,
  History,
  Profile,
  ContactUs,
  Transaction,
  Usage,
  Advice,
  Internet,
  Recommended,
  Complaint,
  AboutUs,
  QuickMenu,
  Topup,
  Aigo,
  PackageDetails,
  NewBoostr,
  TeleponDanSms,
  Roaming,
  PrivacyPolicy,
  DetailPaket,
  Konfirmasi,
  Login,
  Otp,
  Splash,
} from '../pages';

const BerandaStack = createStackNavigator(
  {
    Beranda,
    QuickMenu,
    Topup,
    PackageDetails,
    Aigo,
    DetailPaket,
    Konfirmasi,
    Login,
    Otp,
    Splash,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    headerBackTitleStyle: {
      opacity: 0,
    },
  },
);

const BeliPaketStack = createStackNavigator(
  {
    BeliPaket,
    Internet,
    Recommended,
    NewBoostr,
    TeleponDanSms,
    Roaming,
    PackageDetails,
    Konfirmasi,
  },
  {
    initialRouteName: 'BeliPaket',
    headerMode: 'none',
  },
);

const PlayStack = createStackNavigator(
  {
    Play,
  },
  {
    initialRouteName: 'Play',
    headerMode: 'none',
  },
);

const NotifStack = createStackNavigator(
  {
    Notif,
  },
  {
    initialRouteName: 'Notif',
    headerMode: 'none',
  },
);

const MyAxisStack = createStackNavigator(
  {
    MyAxis,
    History,
    Profile,
    ContactUs,
    Transaction,
    Usage,
    Advice,
    Complaint,
    AboutUs,
    PrivacyPolicy,
  },
  {
    initialRouteName: 'MyAxis',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    BerandaStack,
    BeliPaketStack,
    PlayStack,
    NotifStack,
    MyAxisStack,
  },
  {
    initialRouteName: 'BerandaStack',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
