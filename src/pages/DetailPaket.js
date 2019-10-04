import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
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

import {deleteTransaction} from '../publics/redux/actions/transactions';

class DetailPaket extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    await this.setState({
      products: this.props.navigation.state.params.transactions.rows,
    });
  };

  handleDelete = id => {
    AsyncStorage.getItem('token').then(async token => {
      await this.props.dispatch(deleteTransaction(id, token)).then(() => {
        let products = this.state.products.filter(product => product.id !== id);
        this.setState({products});
        ToastAndroid.showWithGravity(
          'Berhasil berhenti paket',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      });
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 100, position: 'relative'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../assets/icon/ic_chevron_left_primary_24dp.png')}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingLeft: '25%',
                fontWeight: 'bold',
                color: '#704D88',
                fontSize: 17,
              }}>
              DETAIL PAKET
            </Text>
          </View>
          <Image
            source={require('../assets/icon/graphic_header.webp')}
            style={{
              height: 110,
              width: 110,
              top: -25,
              position: 'absolute',
              right: 0,
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.products.map(product => (
            <View
              style={{
                height: 150,
                elevation: 7,
                backgroundColor: 'white',
                marginHorizontal: 10,
                marginBottom: 20,
              }}
              key={product.Product.id}>
              <View style={{padding: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#8D7693',
                      fontWeight: 'bold',
                    }}>
                    Paket
                  </Text>
                  <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => this.handleDelete(product.id)}>
                    <Image
                      source={require('../assets/icon/icon_delete.webp')}
                      style={{height: 20, width: 20, marginRight: 5}}
                    />
                    <Text style={{fontWeight: 'bold', color: '#EF018B'}}>
                      BERHENTI
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={{fontWeight: 'bold', color: '#4C475B'}}>
                  {product.Product.name}
                </Text>
                <Text style={{color: '#DAD8DB'}}>
                  Berlaku sampai 21 Agt 2019
                </Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#DAD8DB',
                    marginTop: 8,
                    marginBottom: 5,
                  }}
                />
                <View
                  style={{
                    height: 20,
                    backgroundColor: '#F4BC1F',
                    borderRadius: 20,
                    marginTop: 10,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  {/* <Text style={{ fontSize: 16, color: '#DAD8DB' }}>Nelp (ke AXIS)</Text> */}
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#646466',
                      fontWeight: 'bold',
                    }}>
                    {product.Product.bandwidth}MB
                  </Text>
                </View>
                {/* <TouchableOpacity style={{ alignItems: 'flex-end', paddingRight: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#EF038C', borderRadius: 20, paddingVertical: 10, width: 150, textAlign: 'center', marginTop: 20 }}>BELI LAGI</Text>
                                </TouchableOpacity> */}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default withNavigation(connect()(DetailPaket));

const styles = StyleSheet.create({
  pulsa: {
    width: '30%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 20,
    color: '#61586A',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // Jika aktif tambah border
    // borderWidth: 1,
    // borderColor: '#00E5BC'
  },
});
