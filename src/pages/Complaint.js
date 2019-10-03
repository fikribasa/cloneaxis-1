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
  KeyboardAvoidingView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Complaint extends React.Component {
  state = {user: ''};
  updateUser = user => {
    this.setState({user: user});
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
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
                  selectedValue={this.state.user}
                  onValueChange={this.updateUser}>
                  <Picker.Item label="- Pilih Kategori -" value="0" />
                  <Picker.Item
                    label="Keluhan Sinyal & Internet Akses"
                    value="1"
                  />
                  <Picker.Item label="Keluhan Paket & Promo" value="2" />
                  <Picker.Item label="Keluhan Konten, RBT, Games" value="3" />
                  <Picker.Item label="Keluhan Pemakaian AXISNET" value="4" />
                  <Picker.Item label="Keluhan Lainnya" value="5" />
                </Picker>
              </View>
            </View>

            <View>
              <Text style={styles.smalltext}>Email</Text>
              <TextInput
                placeholder="Profiles name"
                style={styles.elementform}
                value="Areydra@gmail.com"
              />
            </View>
            <TextInput
              placeholder="Tulis Pesan Anda"
              style={styles.textarea}
              //   value="Tulis Pesan Anda"
              multiline={true}
              numberOfLines={5}
            />
            <View
              styles={{
                justifyContent: 'center',
                marginTop: 40,
                marginLeft: 100,
                backgroundColor: 'blue',

                width: '100%',
              }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white'}}>KIRIM</Text>
                <Image
                  source={require('../assets/icon/ic_arrow_forward_white_18dp.png')}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={
            Platform.OS === 'ios' ? 40 : 0
          }></KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Complaint;

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
