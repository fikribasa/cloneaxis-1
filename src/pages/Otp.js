import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'


import { sendEmail, sendOtp } from '../publics/redux/actions/user'

class Otp extends Component {
    state = { 
        id_user: 0,
        otp : '',
        email: false
     }

     checkOtp = async() => {
         await AsyncStorage.getItem('id_user').then(async(id_user) => {
             try{
                await this.props.dispatch(sendOtp({ UserId: id_user, otp: this.state.otp }))
                await AsyncStorage.setItem('token', this.props.user.token)
                await AsyncStorage.setItem('name', this.props.user.name)
                await AsyncStorage.setItem('email', this.props.user.email)
                await AsyncStorage.setItem('phone', this.props.user.phone)
                await AsyncStorage.setItem('credit', this.props.user.credit.toString())

                 ToastAndroid.showWithGravity(
                     'Success login !',
                     ToastAndroid.LONG,
                     ToastAndroid.CENTER,
                 )
                 this.props.navigation.navigate('Beranda')
             }catch{
                 ToastAndroid.showWithGravity(
                     'OTP Invalid !',
                     ToastAndroid.LONG,
                     ToastAndroid.CENTER,
                 )
                 this.setState({ otp: '' })
             }
         })
     }
    
     sendEmail = async() => {
         await AsyncStorage.getItem('id_user').then(id_user => {
             this.setState({ id_user })
         })
         await AsyncStorage.getItem('email').then(email => {
             this.props.dispatch(sendEmail({id: this.state.id_user, email}))
             this.setState({ email: true })
         })
     }

    render() { 
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 100, width: '100%', position: 'relative' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#704D88', fontSize: 17 }}>OTP</Text>
                    </View>
                    <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
                </View>
                <View style={{ width: '100%', paddingHorizontal: '10%' }}>
                    <Text style={{ textAlign: 'center' }}>Masukan 4 digit kode yang telah dikirim ke nomor AXIS kamu</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '30%', position: 'relative' }}>
                    <TextInput
                        autoFocus={true} returnKeyType='go' style={{ height: 70, width: '40%', color: '#6F2A94', elevation: 5, backgroundColor: 'white', fontSize: 30, paddingHorizontal: 20, textAlign: 'center', fontWeight: 'bold' }} maxLength={4} placeholder='XXXX'
                        onChangeText={ otp => this.setState({ otp }) }
                        onSubmitEditing={() => this.checkOtp()}
                        keyboardType='number-pad'
                        value={ this.state.otp }
                    />
                </View>
                <View style={{ width: '100%', paddingHorizontal: '10%', marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                    {
                        (!this.state.email) ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ textAlign: 'center' }}>Tidak mendapatkan sms? Kirim lewat email</Text><TouchableOpacity onPress={() => this.sendEmail()}><Text style={{ color: 'blue', marginLeft: 10 }}>click here</Text></TouchableOpacity >
                            </View>
                        :
                            <View style={{ width: '100%' }}>
                                <Text style={{ textAlign: 'center' }}>Chek your email</Text>
                            </View>
                    }
                </View>
                <View style={{ height: 50, alignItems: 'flex-end', marginTop: 100, marginHorizontal: 40 }}>
                    <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E5BC', borderRadius: 20 }} onPress={() => this.checkOtp()}>
                        <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 20 }}>LANJUT</Text>
                        <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.token,
        isFulfilled: state.user.isFulfilled
    }
}

export default withNavigation(connect(mapStateToProps)(Otp))

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
        shadowColor: "#000",
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
    }
})