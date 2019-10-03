import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Beranda = props => {
  var {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
        <ImageBackground
          source={require('../assets/icon/graphic_header.png')}
          style={styles.headerbg}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{width: '30%', alignItems: 'center'}}
              onPress={() => props.navigation.goBack()}>
              <Image
                style={{resizeMode: 'center'}}
                source={require('../assets/icon/icon_chevron_right.webp')}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 14, color: '#5B2C6F', fontWeight: 'bold'}}>
              Tentang Axis
            </Text>
            <View style={{width: '20%'}}></View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <Image
        source={require('../assets/icon/tentang_axis.webp')}
        style={{flex: 3, width: width, resizeMode: 'contain', top: -20}}
      />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Axis Mobile App</Text>
        <Text style={styles.p}>
          A self care application and website for Axis customers which allows
          you to check you internet qouta status, remaining balance and do
          balance top up antime anywhere!
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'http:/instagram.com/_u/axis_id/#Intent;package=com.instagram.android;scheme=https;end',
            )
          }>
          <Image
            style={styles.iconsocial}
            source={require('../assets/icon/icon_about_ig.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.facebook.com/AXISgsm/')}>
          <Image
            style={styles.iconsocial}
            source={require('../assets/icon/icon_about_fb.webp')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com/ask_axis')}>
          <Image
            style={styles.iconsocial}
            source={require('../assets/icon/icon_about_twitter.webp')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCzMfl9jaqUP0oaaw_W9bnkw',
            )
          }>
          <Image
            style={styles.iconsocial}
            source={require('../assets/icon/icon_about_youtube.webp')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    top: -20,
    flex: 1,
  },
  headerbg: {
    width: '100%',
    height: 100,
    resizeMode: 'repeat',
    overflow: 'hidden',
    right: 0,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    elevation: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B2C6F',
  },
  p: {
    fontSize: 10,
  },
  iconsocial: {
    width: 60,
    height: 60,
  },
});
