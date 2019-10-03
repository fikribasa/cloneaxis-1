import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ImageBackground,
  Dimensions,
  StatusBar,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

export default class Profile extends Component {
  render() {
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
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{resizeMode: 'center'}}
                  source={require('../assets/icon/icon_chevron_right.webp')}
                />
              </TouchableOpacity>

              <Text style={{fontSize: 18, color: '#5B2C6F'}}>Profile Saya</Text>
              <View style={{width: '20%'}}></View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/icon/profile.png')}
                style={styles.profile}
              />
            </View>
            <View>
              <Text style={styles.smalltext}>Nama Panggilan</Text>
              <TextInput
                placeholder="Profiles name"
                style={styles.elementform}
                value=""
              />
            </View>

            <View>
              <Text style={styles.smalltext}>Email</Text>
              <TextInput
                placeholder="Email"
                style={styles.elementform}
                value=""
              />
            </View>

            <View>
              <Text style={styles.smalltext}>NOMOR HP</Text>
              <TextInput
                placeholder="08XXXXXXXXXXX"
                style={styles.elementform}
                value=""
              />
            </View>

            <View
              styles={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 40,
                marginLeft: 100,
              }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('checkout')}>
                <Text style={{color: 'white'}}>SIMPAN</Text>
                <Image
                  source={require('../assets/icon/ic_arrow_forward_white_18dp.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,

    marginBottom: 20,
    flexDirection: 'column',
  },
  headerbg: {
    width: '100%',
    height: 110,
    resizeMode: 'repeat',
    overflow: 'hidden',
    right: 0,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  profile: {
    resizeMode: 'stretch',
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  elementform: {
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 16,
    marginBottom: 20,
    height: 40,
    paddingLeft: 10,
  },
  smalltext: {
    fontSize: 8,
    marginRight: 4,
    color: '#B3B6B7',
    marginBottom: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#48C9B0',
    borderRadius: 30,
    width: 150,
    height: 40,
    right: 0,
    marginLeft: 'auto',
    marginBottom: 60,
  },
  arrow: {
    width: 30,
    height: 30,
    paddingVertical: 5,
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
});
