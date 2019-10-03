import React from 'react';
import {TouchableOpacity, SafeAreaView, Text, Image, View} from 'react-native';
import {withNavigation} from 'react-navigation';

const Footer = props => {
  return (
    <SafeAreaView
      style={{
        marginTop: -10,
        height: 55,
        position: 'relative',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../assets/background/navbar_shape.webp')}
        style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        style={{flex: 1}}
        onPress={() => props.navigation.navigate('BerandaStack')}>
        <Image
          fadeDuration={0}
          source={
            props.navigation.state.routeName === 'Beranda'
              ? require('../assets/icon/nav_home_on.webp')
              : require('../assets/icon/nav_home_off.webp')
          }
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '100%',
            marginBottom: 3,
            marginTop: 5,
          }}
        />
        <Text
          style={
            props.navigation.state.routeName === 'Beranda'
              ? {textAlign: 'center', color: '#402366', fontSize: 15}
              : {textAlign: 'center', fontSize: 13}
          }>
          Beranda
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{flex: 1}}
        onPress={() => props.navigation.navigate('BeliPaketStack')}>
        <Image
          fadeDuration={0}
          source={
            props.navigation.state.routeName === 'BeliPaket' ||
            props.navigation.state.routeName === 'Roaming' ||
            props.navigation.state.routeName === 'TeleponDanSms' ||
            props.navigation.state.routeName === 'NewBoostr' ||
            props.navigation.state.routeName === 'Internet' ||
            props.navigation.state.routeName === 'Recommended'
              ? require('../assets/icon/nav_beli_on.webp')
              : require('../assets/icon/nav_beli_off.webp')
          }
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '100%',
            marginBottom: 3,
            marginTop: 5,
          }}
        />
        <Text
          style={
            props.navigation.state.routeName === 'BeliPaket'
              ? {textAlign: 'center', color: '#402366', fontSize: 15}
              : {textAlign: 'center', fontSize: 13}
          }>
          Beli Paket
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{flex: 1}}
        onPress={() => props.navigation.navigate('PlayStack')}>
        <Image
          fadeDuration={0}
          source={
            props.navigation.state.routeName === 'Play'
              ? require('../assets/icon/nav_play_on.webp')
              : require('../assets/icon/nav_play_off.webp')
          }
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '100%',
            marginBottom: 3,
            marginTop: 5,
          }}
        />
        <Text
          style={
            props.navigation.state.routeName === 'Play'
              ? {textAlign: 'center', color: '#402366', fontSize: 15}
              : {textAlign: 'center', fontSize: 13}
          }>
          Play
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{flex: 1}}
        onPress={() => props.navigation.navigate('NotifStack')}>
        <Image
          fadeDuration={0}
          source={
            props.navigation.state.routeName === 'Notif'
              ? require('../assets/icon/nav_notif_on.webp')
              : require('../assets/icon/nav_notif_off.webp')
          }
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '100%',
            marginBottom: 3,
            marginTop: 5,
          }}
        />
        <Text
          style={
            props.navigation.state.routeName === 'Notif'
              ? {textAlign: 'center', color: '#402366', fontSize: 15}
              : {textAlign: 'center', fontSize: 13}
          }>
          Notif
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{flex: 1}}
        onPress={() => props.navigation.navigate('MyAxisStack')}>
        <Image
          fadeDuration={0}
          source={
            props.navigation.state.routeName === 'MyAxis'
              ? require('../assets/icon/nav_axis_on.webp')
              : require('../assets/icon/nav_axis_off.webp')
          }
          style={{
            resizeMode: 'contain',
            height: '50%',
            width: '100%',
            marginBottom: 3,
            marginTop: 5,
          }}
        />
        <Text
          style={
            props.navigation.state.routeName === 'MyAxis'
              ? {textAlign: 'center', color: '#402366', fontSize: 15}
              : {textAlign: 'center', fontSize: 13}
          }>
          My Axis
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default withNavigation(Footer);
