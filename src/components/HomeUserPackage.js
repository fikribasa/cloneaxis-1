import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet } from 'react-native'


const HomeUserPackage = () => {
    return(
        <View style={{ height: 150, marginTop: -15, position: 'relative' }}>
            <Image source={ require('../assets/background/bg_home_mid.webp') } style={{ height: 350, width: 150, top: -250, right: -25, position: 'absolute', resizeMode: 'contain' }} />
            <View style={{ height: 110, marginHorizontal: 15, marginTop: 20, borderRadius: 10,
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
                flexDirection: 'row'
            }}>
                <View style={{ height: '100%', width: '40%', justifyContent: 'center' }}>
                    <Image source={require('../assets/icon/ic_nopackage.webp')} style={{ height: '50%', width: '50%', resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: '#7B7B7B' }}>Kamu belum mempunyai paket telepon/internet</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, marginTop: 10, color: '#EB2A8C', fontWeight: 'bold', marginRight: 15 }}>BELI SEKARANG</Text>
                        <Image source={ require('../assets/icon/ic_info_pink.webp') } style={{ marginTop: 10, height: 25, width: 25 }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeUserPackage

const styles =  StyleSheet.create({
})