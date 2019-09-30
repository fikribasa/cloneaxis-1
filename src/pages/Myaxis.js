import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {withNavigation} from 'react-navigation';

class Myaxis extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Lainnya</Text>
        <View style={styles.subcontainer}>
          <Image
            source={require('../assets/icon/nav_axis_on.webp')}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Axis Saya</Text>
        </View>
        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={styles.item}
              onPress={() => this.props.navigation.navigate('Profile')}>
              Profil Saya
            </Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={styles.item}
              onPress={() => this.props.navigation.navigate('History')}>
              History
            </Text>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item}>Tour Product</Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              onPress={() => this.props.navigation.navigate('ContactUs')}
              style={styles.item}>
              Hubungi Kami
            </Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>

          <View style={styles.strip}></View>
        </View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item}>Kebijakan Privacy Policy</Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.strip}></View>

        <View style={{flexDirection: 'column', paddingLeft: 8}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item}>Tentang Axis</Text>
            <Image
              source={require('../assets/icon/ic_chevron_right_purple.webp')}
              style={styles.arrow}
            />
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
    );
  }
}

export default withNavigation(Myaxis);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 34,
    flex: 1,
  },
  subcontainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
  },
  subtitle: {
    color: '#9257af',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    paddingHorizontal: 16,
    color: '#9257af',
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  strip: {
    backgroundColor: '#F2F3F4',
    height: 3,
    marginBottom: 20,
  },
  arrow: {
    width: 30,
    height: 30,
  },
});
