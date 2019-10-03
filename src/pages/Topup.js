import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const Topup = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 100, position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={require('../assets/icon/ic_chevron_left_primary_24dp.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: '27%', fontWeight: 'bold', color: '#704D88', fontSize: 17 }}>TOP UP</Text>
                </View>
                <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
            </View>
            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 17, color: '#836E8F' }}>Pulsa Tersedia</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#42345A' }}>Rp. 34.188</Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <Text style={{ marginBottom: 10, color: '#AEAEAE' }}>NOMOR HANDPHONE</Text>
                <View>
                    <TextInput keyboardType='number-pad' style={{ borderWidth: 1, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8 }}>083807106451</TextInput>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10, color: '#7A518E' }}>AMBIL DARI KONTAK</Text>
            </View>
            <View style={{ height: 200, marginTop: 40 }}>
                <Text style={{ marginLeft: 10, color: '#AEAEAE' }}>PILIH NOMINAL</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 35, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>25K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>50K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>50K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>125K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>150K</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pulsa}>
                        <Text>200K</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E5BC', borderRadius: 20 }}>
                    <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 20 }}>LANJUT</Text>
                    <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default withNavigation(Topup)

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