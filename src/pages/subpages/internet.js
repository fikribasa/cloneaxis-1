import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Footer from '../../layouts/Footer';
import {ScrollView} from 'react-native-gesture-handler';

const Package = [
  {
    id: '1',
    date: '28 Sep 2019 16:02:06',
    type: 'bronet',
    price: 50,
    name: 'Bronet 24Jam 1 GB',
    aktif: 30,
  },
  {
    id: '2',
    date: '27 Sep 2019 16:02:06',
    type: 'bronet',
    price: 50,
    name: 'Bronet 24Jam 1 GB',
    aktif: 30,
  },
  {
    id: '3',
    date: '25 Sep 2019 16:02:06',
    type: 'bronet',
    price: 25,
    name: 'Bronet 24Jam 1 GB',
    aktif: 30,
  },
];

function Item({name, price, aktif}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 220,
          borderColor: '#D7DBDD',
          borderWidth: 3,
          marginLeft: 10,
          padding: 5,
        }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          <Text style={styles.rp}>Rp</Text> {price}
        </Text>
        <Text style={styles.aktif}>Masa Aktif {aktif} Hari</Text>
      </View>
    </TouchableOpacity>
  );
}

class internet extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#EBEBEB'}}>
        <ScrollView horizontal={true} style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Semua')}>
            <Text style={{color: 'white', fontSize: 12}}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Semua')}>
            <Text style={{color: 'white', fontSize: 12}}>BroNet 24 Jam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Semua')}>
            <Text style={{color: 'white', fontSize: 12}}>OWSEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Semua')}>
            <Text style={{color: 'white', fontSize: 12}}>OBOR Dinihari</Text>
          </TouchableOpacity>
        </ScrollView>
        <FlatList
          horizontal={true}
          data={Package}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item name={item.name} price={item.price} aktif={item.aktif} />
          )}
        />
        {/* <Footer /> */}
      </SafeAreaView>
    );
  }
}

export default internet;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#48C9B0',
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 40,
    right: 0,
    marginRight: 10,
    marginBottom: 60,
  },

  aktif: {
    fontSize: 10,
    marginRight: 4,
    color: '#B3B6B7',
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9257af',
  },
  rp: {
    fontSize: 10,
    color: '#F1C40F',
    marginTop: -8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F1C40F',
    marginBottom: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    left: 0,
  },
});
