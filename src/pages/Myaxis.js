import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Footer from '../layouts/Footer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MyAxis = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
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
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            source={require('../assets/icon/nav_axis_on.webp')}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Axis Saya</Text>
        </View>
        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}>
              <Text style={styles.item}>Profil Saya</Text>
            </TouchableOpacity>

            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('History')}>
              <Text style={styles.item}>History</Text>
            </TouchableOpacity>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.strip}></View>

        {/*  */}

        <View style={styles.subcontainer}>
          <Image
            source={require('../assets/icon/graphic_moremenu_lainnya.webp')}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Lainnya</Text>
        </View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                flexDirection: 'row',
              }}
              onPress={() => alert('Clicked')}>
              <Text style={styles.item}>Tour Product</Text>
              <Image
                source={require('../assets/icon/ic_chevron_right_purple.webp')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                flexDirection: 'row',
              }}
              onPress={() => props.navigation.navigate('ContactUs')}>
              <Text style={styles.item}>Hubungi Kami</Text>
              <Image
                source={require('../assets/icon/ic_chevron_right_purple.webp')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.strip}></View>
        </View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                flexDirection: 'row',
              }}
              onPress={() => props.navigation.navigate('ContactUs')}>
              <Text style={styles.item}>Kebijakan Privacy Policy</Text>
              <Image
                source={require('../assets/icon/ic_chevron_right_purple.webp')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View>
            <TouchableOpacity
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                flexDirection: 'row',
              }}
              onPress={() => props.navigation.navigate('AboutUs')}>
              <Text style={styles.item}>Tentang Axis</Text>
              <Image
                source={require('../assets/icon/ic_chevron_right_purple.webp')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item}>Keluar</Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default MyAxis;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 34,
    flex: 1,
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

  subcontainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
    marginTop: 50,
    marginLeft: 4,
  },
  subtitle: {
    color: '#6f2d91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    paddingHorizontal: 16,
    color: '#6f2d91',
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  strip: {
    backgroundColor: '#F2F3F4',
    height: 2,
    marginBottom: 20,
    marginHorizontal: 4,
  },
  arrow: {
    width: 30,
    height: 30,
  },
});
