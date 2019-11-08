import React from 'react';

import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import Footer from '../layouts/Footer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {getNotification} from '../publics/redux/actions/notification';

function Item({date, message}) {
  return (
    <TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>AXIS</Text>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.strip}></View>
    </TouchableOpacity>
  );
}

class Notif extends React.Component {
  state = {
    notification: [],
    UserId: '',
  };

  componentDidMount = async () => {
    await AsyncStorage.getItem('id_user').then(id_user => {
      this.setState({UserId: id_user});
    });
    await this.props.dispatch(getNotification(this.state.UserId));
    // await new Promise(resolve => {
    //   setTimeout(resolve, 1000);
    // });
    await this.setState({notification: this.props.notification.rows});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
          <ImageBackground
            source={require('../assets/icon/header_profile.png')}
            style={styles.headerbg}>
            <View style={styles.header}>
              <Text style={styles.titletop}>Notifikasi</Text>
              <View style={{width: '20%'}}></View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <SafeAreaView style={styles.container}>
          {this.state.notification.length > 0 ? (
            <FlatList
              data={this.state.notification}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <Item date={item.createdAt} message={item.message} />
              )}
            />
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icon/blank_notif.webp')}
                style={{
                  resizeMode: 'contain',
                  width: 400,
                  height: 400,
                  // fontSize: 14,
                  // color: '#6f2d91',
                }}
              />
              <Text>Tidak Ada Notifikasi</Text>
            </View>
          )}
        </SafeAreaView>
        <Footer />
      </SafeAreaView>
    );
  }
}
const mapStateProps = state => {
  return {
    notification: state.notification.notifications,
  };
};

export default connect(mapStateProps)(Notif);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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

  date: {
    fontSize: 10,
    marginRight: 4,
    color: '#B3B6B7',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: '#6f2d91',
  },

  strip: {
    backgroundColor: '#F2F3F4',
    height: 3,
    marginBottom: 20,
    marginTop: 10,
  },
  titletop: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
    marginTop: 50,
    marginBottom: 20,
  },
});
