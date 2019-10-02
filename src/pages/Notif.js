import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Footer from '../layouts/Footer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';

const DATA = [
  {
    id: '1',
    date: '28 Sep 2019 16:02:06',
    title: 'Axis',
    message:
      '<#> kata sandi kamu IB8J6u untuk bertransaksi/login AXISNET. /n Waspadai penipuan dan JANGAN share kode ini. Selamat menggunakan AXISNET. /n QzAPT8vQuhF',
  },
  {
    id: '2',
    date: '27 Sep 2019 16:02:06',
    title: 'Axis',
    message:
      '<#> kata sandi kamu IB8J6u untuk bertransaksi/login AXISNET. /n Waspadai penipuan dan JANGAN share kode ini. Selamat menggunakan AXISNET. /n QzAPT8vQuhF',
  },
  {
    id: '3',
    date: '25 Sep 2019 16:02:06',
    title: 'Axis',
    message: 'Paket OBOR 14GB 10hr',
  },
];

import {getNotification} from '../publics/redux/actions/notification';

function Item({title, date, message}) {
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
  };

  componentDidMount = async () => {
    await this.props.dispatch(getNotification(1));
    await this.setState({notification: this.props.notification});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {console.log(this.state.notification)}
        <StatusBar translucent backgroundColor="transparent" />
        <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
          <ImageBackground
            source={require('../assets/icon/graphic_header.png')}
            style={styles.headerbg}>
            <View style={styles.header}>
              <Text style={styles.titletop}>Notifikasi</Text>
              <View style={{width: '20%'}}></View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Item
                title={item.title}
                date={item.date}
                message={item.message}
              />
            )}
          />
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
    color: '#9257af',
  },

  strip: {
    backgroundColor: '#F2F3F4',
    height: 3,
    marginBottom: 20,
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
