import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import Header from '../layouts/HeaderHistory';

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <WebView source={{uri: 'https://www.axisnet.id/privacypolicy'}} />
      </SafeAreaView>
    );
  }
}
export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});
