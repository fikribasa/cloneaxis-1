import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const Otp = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 100, width: '100%', position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20, justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: '#704D88', fontSize: 17}}>OTP</Text>
                </View>
                <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
            </View>
            <View style={{ width: '100%', paddingHorizontal: '10%' }}>
                <Text style={{ textAlign: 'center' }}>Masukan 4 digit kode yang telah dikirim ke Email kamu</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '40%', position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <TextInput returnKeyType='go' style={{ height: 80, width: '20%', fontSize: 50, color: '#6F2A94',textAlign: 'center', fontWeight: 'bold' }} maxLength={1} 
                    />
                    <TextInput returnKeyType='go' style={{ height: 80, width: '20%', fontSize: 50, color: '#6F2A94',textAlign: 'center', fontWeight: 'bold' }} maxLength={1} 
                    />
                    <TextInput returnKeyType='go' style={{ height: 80, width: '20%', fontSize: 50, color: '#6F2A94',textAlign: 'center', fontWeight: 'bold' }} maxLength={1} 
                    />
                    <TextInput returnKeyType='go' style={{ height: 80, width: '20%', fontSize: 50, color: '#6F2A94',textAlign: 'center', fontWeight: 'bold' }} maxLength={1} 
                    />
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'center', marginTop: 20 }}>
                    <View style={{ backgroundColor: '#DAD9DF', width: 20, height: 20, marginHorizontal: 18.8, borderRadius: 50, fontSize: 200, color: 'black' }} />
                    <View style={{ backgroundColor: '#DAD9DF', width: 20, height: 20, marginHorizontal: 18.8, borderRadius: 50, fontSize: 200, color: 'black' }} />
                    <View style={{ backgroundColor: '#DAD9DF', width: 20, height: 20, marginHorizontal: 18.8, borderRadius: 50, fontSize: 200, color: 'black' }} />
                    <View style={{ backgroundColor: '#DAD9DF', width: 20, height: 20, marginHorizontal: 18.8, borderRadius: 50, fontSize: 200, color: 'black' }} />
                </View>
            </View>
            <View style={{ height: 50, alignItems: 'flex-end', marginTop: 100, marginHorizontal: 40 }}>
                <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E5BC', borderRadius: 20 }} onPress={ () => props.navigation.navigate('Beranda') }>
                    <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 20 }}>LANJUT</Text>
                    <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default withNavigation(Otp)

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