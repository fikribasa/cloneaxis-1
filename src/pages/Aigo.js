import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


const Aigo = props => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 100, position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={require('../assets/icon/ic_chevron_left_primary_24dp.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: '27%', fontWeight: 'bold', color: '#704D88', fontSize: 17 }}>SCAN AIGO</Text>
                </View>
                <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
            </View>
            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#565656', marginRight: 5 }}>Belum tahu AIGO?</Text>
                <Text style={{ fontSize: 18, color: '#D573B0', fontWeight: 'bold' }}>Cari TAHU DISINI</Text>
            </View>
            <View style={{ height: 200, backgroundColor: '#3D2360', marginHorizontal: 15, borderRadius: 25, paddingHorizontal: 10 }}>
                <Image source={require('../assets/icon/graphic_camera_big.webp')} style={{ width: 75, height: 75, alignSelf: 'center', marginTop: 20 }} />
                <Text style={{ fontSize: 20, textAlign: 'center', color: '#C1B1D3' }}>Gunakan kamera untuk memindai kode rahasia AIGO kamu</Text>
                <Text style={{ color: '#901C79', fontSize: 15, marginTop: 17, textAlign: 'center' }}>Pindai dengan kamera</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ backgroundColor: '#AEAEAE', height: 1, width: '40%' }}></View>
                <Text style={{ color: '#AEAEAE', width: '20%', textAlign: 'center' }}>Atau</Text>
                <View style={{ backgroundColor: '#AEAEAE', height: 1, width: '40%' }}></View>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={{ color: '#4E4E4E' }}>AIGO NUMBER</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput keyboardType='number-pad' maxLength={4} style={{ height: 40, borderWidth: 1, width: '25%', borderRadius: 5, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8, textAlign: 'center' }} placeholder="xxxx"></TextInput>
                    <Text style={{ color: '#AEAEAE' }}>-</Text>
                    <TextInput keyboardType='number-pad' maxLength={4} style={{ height: 40, borderWidth: 1, width: '25%', borderRadius: 5, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8, textAlign: 'center' }} placeholder="xxxx"></TextInput>
                    <Text style={{ color: '#AEAEAE' }}>-</Text>
                    <TextInput keyboardType='number-pad' maxLength={4} style={{ height: 40, borderWidth: 1, width: '25%', borderRadius: 5, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8, textAlign: 'center' }} placeholder="xxxx"></TextInput>
                    <Text style={{ color: '#AEAEAE' }}>-</Text>
                    <TextInput keyboardType='number-pad' maxLength={4} style={{ height: 40, borderWidth: 1, width: '25%', borderRadius: 5, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8, textAlign: 'center' }} placeholder="xxxx"></TextInput>

                </View>
                <Text style={{ marginTop: 10, color: '#4E4E4E' }}>MASUKAN 16 DIGIT NOMOR AIGO</Text>
            </View>
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity style={{ width: 150, height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#00E5BC', borderRadius: 20, paddingHorizontal: 20 }}>
                    <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 15 }}>LANJUT</Text>
                    <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Aigo

const styles = StyleSheet.create({
})