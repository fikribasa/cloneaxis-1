import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {login} from '../publics/redux/actions/user';

class Login extends Component {
  state = {
    phone: '',
  };

  checkUser = async () => {
    if (this.state.phone.length > 10) {
      try {
        await this.props.dispatch(login({phone: this.state.phone}));
        await AsyncStorage.setItem('id_user', this.props.user.id.toString());
        await AsyncStorage.setItem('email', this.props.user.email.toString());
        this.setState({phone: ''});
        this.props.navigation.navigate('Otp');
      } catch {
        ToastAndroid.showWithGravity(
          'Phone number not found!',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.setState({phone: ''});
      }
    } else {
      ToastAndroid.showWithGravity(
        'Phone number min length 10!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/background/bg_login.webp')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            position: 'absolute',
          }}
        />
        <TextInput
          keyboardType="number-pad"
          autoFocus={true}
          returnKeyType="go"
          style={{
            height: 80,
            width: '90%',
            color: '#6F2A94',
            elevation: 5,
            backgroundColor: 'white',
            marginTop: 130,
            fontSize: 40,
            paddingHorizontal: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          maxLength={13}
          placeholder="083XXXXXXXXXX"
          onChangeText={phone => this.setState({phone})}
          onSubmitEditing={() => this.checkUser()}>
          {this.state.phone}
        </TextInput>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isFulfilled: state.user.isFulfilled,
    isRejected: state.user.isRejected,
  };
};

export default withNavigation(connect(mapStateToProps)(Login));

const styles = StyleSheet.create({});
