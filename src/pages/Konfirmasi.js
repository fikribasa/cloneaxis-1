import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import { createTransaction } from '../publics/redux/actions/transactions'

class Konfirmasi extends Component {
    state = { 
        phone : 0
     }

    componentDidMount = async () => {
        await AsyncStorage.getItem('phone').then(phone => {
            this.setState({ phone })
        })
    }

    handleCheckout = () => {
        AsyncStorage.getItem('id_user').then(id_user => {
            let data = {
                UserId: id_user,
                ProductId: this.props.navigation.state.params.package.id
            }

            AsyncStorage.getItem('token').then(token => {
                this.props.dispatch(createTransaction(data, token)).then(() => {
                    ToastAndroid.showWithGravity(
                        'Success checkout',
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER,
                    )
                    this.props.navigation.navigate('Beranda')
                })
            })
        })
    }
    render() { 
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 100, position: 'relative' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../assets/icon/ic_chevron_left_primary_24dp.png')} style={{ height: 40, width: 40 }} />
                        </TouchableOpacity>
                        <Text style={{ paddingLeft: '27%', fontWeight: 'bold', color: '#704D88', fontSize: 15 }}>KONFIRMASI</Text>
                    </View>
                    <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 30 }}>Konfirmasi transaksi kamu dibawah ini</Text>
                    <View style={{ height: 400 }}>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#CCCCCC' }}>PAKET</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.navigation.state.params.package.name} {(this.props.navigation.state.params.package.discount > 0) ? <Text>DISC {this.props.navigation.state.params.package.discount}% </Text> : null}</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#CCCCCC' }}>NOMOR TUJUAN</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ this.state.phone }</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#CCCCCC' }}>JUMLAH PEMBAYARAN</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Rp. {this.props.navigation.state.params.package.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                        </View>
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#CCCCCC', marginBottom: 10 }}>METODE PEMBAYARAN</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/icon/icon_payment_pulsa.webp')} style={{ height: 40, width: 40 }} />
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pulsa</Text>
                                    <Text style={{ fontSize: 13, marginTop: -5 }}>Rp. {this.props.navigation.state.params.package.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E5BC', borderRadius: 20 }} onPress={() => this.handleCheckout()}>
                            <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 15 }}>KONFIRMASI</Text>
                            <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 25, width: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default withNavigation(connect()(Konfirmasi))

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