import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SafeAreaView from 'react-native-safe-area-view';
import {View, FlatList, StyleSheet, Text, ImageBackground} from 'react-native';
import Footer from '../layouts/Footer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

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

const notif = [];

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
  render() {
    // const [data, setData] = useState({hits: []});
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(async () => {
    //   const result = await axios(
    //     'https://hn.algolia.com/api/v1/search?query=redux',
    //   );

    //   setData(result.data);
    //   fetchData();
    // }, []);
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
          <ImageBackground
            source={require('../assets/icon/graphic_header.png')}
            style={styles.headerbg}>
            <View style={styles.header}>
              <Text style={styles.title}>Lainnya</Text>
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
    notification: state.notification.notification,
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
});
