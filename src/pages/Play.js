import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Footer from '../layouts/Footer';

const Play = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{flex: 1, marginHorizontal: 20, flexDirection: 'column'}}>
        <Text style={styles.title}>Axis Play</Text>

        <TouchableOpacity style={styles.cardred}>
          <View style={{flexDirection: 'column', width: 250}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Sureprise
            </Text>
            <Text style={{color: 'white', fontSize: 11}}>
              Temukan promo menarik dan bonus mingguan kamu disini!
            </Text>
          </View>
          <Image
            source={require('../assets/icon/sureprize_tab_icon.webp')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardgreen}>
          <View style={{flexDirection: 'column', width: 250}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
              }}>
              Loyalty Stamp
            </Text>
            <Text style={{color: 'white', fontSize: 11}}>
              Beli paketnya, kumpulkan stampnya, dapatkan bonusnya!
            </Text>
          </View>
          <Image
            source={require('../assets/icon/graphic_axiswheel.webp')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Play;
const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
    marginVertical: 50,
    fontWeight: 'bold',
  },
  cardred: {
    flexDirection: 'row',
    backgroundColor: '#FF585B',
    marginBottom: 30,
    padding: 20,
    paddingBottom: 8,
    borderRadius: 10,
  },
  cardgreen: {
    flexDirection: 'row',
    backgroundColor: '#00E2BC',
    marginBottom: 30,
    padding: 20,
    paddingBottom: 8,
    borderRadius: 10,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: -30,
    marginTop: -10,
  },
});
