import React from 'react';
import {TouchableOpacity, FlatList, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const USAGE = [
  {
    id: '1',
    date: '28 Sep 2019 16:02:06',
    type: 'Usage',
    price: 50,
  },
  {
    id: '2',
    date: '27 Sep 2019 16:02:06',
    type: 'Usage',
    price: 50,
  },
  {
    id: '3',
    date: '25 Sep 2019 16:02:06',
    type: 'Usage',
    price: 25,
  },
];

function Item({type, date, price}) {
  return (
    <TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.price}>{price} KB</Text>
      </View>

      <View style={styles.strip}></View>
    </TouchableOpacity>
  );
}

export default function Usage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={USAGE}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item type={item.type} date={item.date} price={item.price} />
        )}
      />
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
  type: {
    fontSize: 18,
    color: '#9257af',
  },
  price: {
    fontSize: 20,
    color: '#9257af',
    marginBottom: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    left: 0,
  },
  strip: {
    backgroundColor: '#F2F3F4',
    height: 3,
    marginBottom: 20,
  },
});
