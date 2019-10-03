import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setTimePassed();
    }, 3000);
  };
  setTimePassed = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <Image
          source={require('../assets/background/image_splashscreen.webp')}
          style={{resizeMode: 'center'}}
        />
      </SafeAreaView>
    );
  }
}
export default Splash;
