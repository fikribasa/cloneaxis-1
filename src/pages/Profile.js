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
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import {connect} from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
import {getUser, patchUser} from '../publics/redux/actions/user';

class Profile extends Component {
  state = {
    user: [],
    newname: '',
    newemail: '',
  };

  componentDidMount = async () => {
    await this.props.dispatch(getUser(1));
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    await this.setState({
      newname: this.props.user.name,
      newemail: this.props.user.newemail,
    });
    await this.setState({user: this.props.user});
  };

  handleEdit = async (newname, newemail) => {
    const data = {name: this.state.newname, email: this.state.newemail};
    await this.props.dispatch(patchUser(1, data)).then(async () => {
      await this._toastpatch();
    });
  };

  _toastpatch = () => {
    //function to make Toast With Duration, Gravity And Offset
    ToastAndroid.showWithGravityAndOffset(
      'Update Success',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50, //yOffset
    );
  };

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
                placeholder="Nama User"
                style={styles.elementform}
                defaultValue={this.state.user.name}
                onChangeText={text => this.setState({newname: text})}
              />
            </View>

            <View>
              <Text style={styles.smalltext}>Email</Text>
              <TextInput
                placeholder="Email User"
                style={styles.elementform}
                defaultValue={this.state.user.email}
                onChangeText={text => this.setState({newemail: text})}
              />
            </View>

            <View>
              <Text style={styles.smalltext}>NOMOR HP</Text>
              <TextInput
                placeholder="Nomor HP"
                style={styles.elementform}
                value={this.state.user.phone}
                editable={false}
              />
            </View>

            <View
              styles={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: 40,
                marginLeft: 100,
              }}>
              <TouchableOpacity style={styles.button} onPress={this.handleEdit}>
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

const mapStateProps = state => {
  return {
    user: state.user.users,
  };
};

export default connect(mapStateProps)(Profile);

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
