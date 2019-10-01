import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Footer from '../layouts/Footer';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

function Item({title, date, message}) {
  return (
    <TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.strip}></View>
    </TouchableOpacity>
  );
}
export default function Notif() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item title={item.title} date={item.date} message={item.message} />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
}

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
