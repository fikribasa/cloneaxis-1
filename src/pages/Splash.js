import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { getPackageKangen, getPackageCurhat } from '../publics/redux/actions/package/teleponDanSms'
import { getPackageGame, getPackageMusik, getPackageSosmed, getPackageSunset, getPackageVideo } from '../publics/redux/actions/package/newBoostr'
import { getPackageBronet, getPackageOwsem, getPackageObor, getPackageRabuRawit } from '../publics/redux/actions/package/internet'
import { getPackageMabrurNelpDanSms, getPackageAxisPass, getPackageComboMabrur, getPackageInternetMabrur } from '../publics/redux/actions/package/roaming'
import { getPackageCategoryRecommended } from '../publics/redux/actions/axispackage';
import { getTransactions } from '../publics/redux/actions/transactions'

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }
  componentDidMount = async() => {
    setTimeout(() => {
      this.setTimePassed();
    }, 5000);

    await AsyncStorage.getItem('id_user').then((id_user) => {
      this.props.dispatch(getTransactions(id_user))
    })
    await this.props.dispatch(getPackageCurhat())
    await this.props.dispatch(getPackageKangen())
    await this.props.dispatch(getPackageSosmed())
    await this.props.dispatch(getPackageMusik())
    await this.props.dispatch(getPackageSunset())
    await this.props.dispatch(getPackageVideo())
    await this.props.dispatch(getPackageGame())
    await this.props.dispatch(getPackageBronet())
    await this.props.dispatch(getPackageOwsem())
    await this.props.dispatch(getPackageObor())
    await this.props.dispatch(getPackageRabuRawit())
    await this.props.dispatch(getPackageMabrurNelpDanSms())
    await this.props.dispatch(getPackageAxisPass())
    await this.props.dispatch(getPackageComboMabrur())
    await this.props.dispatch(getPackageInternetMabrur())
    await this.props.dispatch(getPackageCategoryRecommended());
  };
  setTimePassed = () => {
    AsyncStorage.getItem('token').then(async(token) => {
      if(!token){
        this.props.navigation.navigate('AuthStack')
      }else{
        this.props.navigation.navigate('BerandaStack')
      } 
    })
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
        <Image
          source={require('../assets/background/image_splashscreen.webp')}
          style={{ resizeMode: 'center', height: '100%', width: '100%' }}
        />
      </SafeAreaView>
    );
  }
}
export default connect()(Splash);
