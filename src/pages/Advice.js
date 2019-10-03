import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
  ImageBackground,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {postReport} from '../publics/redux/actions/report';

class Advice extends React.Component {
  state = {
    UserId: '1',
    complain: '',
    choosenLabel: '',

    allcomplain: '',
  };

  handlePostReport = async () => {
    const data = {
      complain: this.state.choosenLabel + ' berisi ' + this.state.complain,
      UserId: this.state.UserId,
    };
    await this.props.dispatch(postReport(data));
    await this._toastpatch();
  };

  _toastpatch = () => {
    //function to make Toast With Duration, Gravity And Offset
    ToastAndroid.showWithGravityAndOffset(
      'Saran Anda berhasil dikirim, \n Terima kasih atas saran anda (/ ^^)/ ',
      ToastAndroid.LONG, //can be SHORT, LONG
      ToastAndroid.BOTTOM, //can be TOP, BOTTON, CENTER
      25, //xOffset
      50, //yOffset
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView>
          <View>
            <ImageBackground
              source={require('../assets/icon/bg_contact.webp')}
              style={styles.banner}>
              <View
                style={{color: 'white', flex: 1, marginLeft: 6, marginTop: 3}}>
                <Text style={{color: 'white', fontSize: 10}}>Call Us</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>838</Text>
              </View>
              <View
                style={{color: 'white', flex: 1, marginLeft: 6, marginTop: 3}}>
                <Text style={{color: 'white', fontSize: 10}}>Tweet Us</Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  @Ask_AXIS
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <View>
              <Text style={styles.smalltext}>Subject</Text>
              <View style={styles.picker}>
                <Picker
                  style={{marginTop: 2}}
                  selectedValue={this.state.choosenLabel}
                  onValueChange={itemValue =>
                    this.setState({choosenLabel: itemValue})
                  }>
                  <Picker.Item label="- Pilih Kategori -" value="0" />
                  <Picker.Item
                    label="Saran Sinyal & Internet Akses"
                    value="Saran Sinyal & Internet Akses"
                  />
                  <Picker.Item
                    label="Saran Paket & Promo"
                    value="Saran Paket & Promo"
                  />
                  <Picker.Item
                    label="Saran Konten, RBT, Games"
                    value="Saran Konten, RBT, Games"
                  />
                  <Picker.Item
                    label="Saran Pemakaian AXISNET"
                    value="Saran Pemakaian AXISNET"
                  />
                  <Picker.Item label="Saran Lainnya" value="Saran Lainnya" />
                </Picker>
              </View>
            </View>

            {/*<View>
             <Text style={styles.smalltext}>Email</Text>
              <TextInput
                placeholder="Email Address"
                style={styles.elementform}
                onChangeText={text => this.setState({email: text})}
              />
            </View> */}
            <TextInput
              placeholder="Tulis Pesan Anda"
              style={styles.textarea}
              //   value="Tulis Pesan Anda"
              multiline={true}
              numberOfLines={5}
              onChangeText={text => this.setState({complain: text})}
            />
            <View
              styles={{
                justifyContent: 'center',
                marginTop: 40,
                marginLeft: 100,
                backgroundColor: 'blue',

                width: '100%',
              }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handlePostReport()}>
                <Text style={{color: 'white'}}>KIRIM</Text>
                <Image
                  source={require('../assets/icon/ic_arrow_forward_white_18dp.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // report: state.report.report,
  };
};

export default connect(mapStateToProps)(Advice);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 34,
  },
  banner: {
    width: '100%',
    height: 60,
    marginRight: 8,
    flexDirection: 'row',
  },
  elementform: {
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 16,
    marginBottom: 20,
    height: 40,
    paddingLeft: 10,
  },
  picker: {
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 16,
    marginBottom: 20,
    height: 50,
    paddingLeft: 10,
  },
  textarea: {
    borderColor: '#ABB2B9',
    borderRadius: 3,
    borderWidth: 1,
    borderBottomWidth: 3,
    fontSize: 16,
    marginBottom: 20,
    height: 100,
    paddingLeft: 10,
  },
  smalltext: {
    fontSize: 12,
    marginRight: 4,
    color: '#9257af',
    marginBottom: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#48C9B0',
    borderRadius: 30,
    width: 150,
    height: 40,
  },
  arrow: {
    width: 30,
    height: 30,
    paddingVertical: 5,
  },
});
