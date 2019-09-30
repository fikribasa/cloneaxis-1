import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';

import React, {Component} from 'react';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/icon/profile.webp')}
            style={styles.profile}
          />
        </View>
        <View>
          <Text style={styles.smalltext}>Nama Panggilan</Text>
          <TextInput
            placeholder="Profiles name"
            style={styles.elementform}
            value="Areydra"
          />
        </View>

        <View>
          <Text style={styles.smalltext}>Email</Text>
          <TextInput
            placeholder="Profiles name"
            style={styles.elementform}
            value="Areydra@gmail.com"
          />
        </View>

        <View
          styles={{
            justifyContent: 'center',
            flex: 1,
            marginTop: 40,
            marginLeft: 100,
          }}>
          <View style={styles.button}>
            <Text style={{color: 'white'}}>SIMPAN</Text>
            <Image
              source={require('../assets/icon/ic_arrow_forward_white_18dp.png')}
              style={styles.arrow}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 80,
    flex: 1,
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
  },
  arrow: {
    width: 30,
    height: 30,
    paddingVertical: 5,
  },
});
