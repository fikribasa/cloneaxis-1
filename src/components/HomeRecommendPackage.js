import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const HomeRecommendPackage = () => {
    return (
        <View style={{ height: 180, marginTop: -10 }}>
            <View style={{ height: '12%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#362251', paddingLeft: 20 }}>Rekomendasi untukmu</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 7 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 10, color: '#DE4DA4' }}>LIHAT SEMUA</Text>
                    <Image source={require('../assets/icon/icon_arrow2_right_pink.webp')} style={{ width: 23, height: 23 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 5 }}>
                <View style={{
                    height: 115, width: 160, borderRadius: 10, backgroundColor: '#F9A11B', padding: 13,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 7
                }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>INTERNET</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>10GB DISC 40%</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Rp</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>59.000</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', fontSize: 12, color: 'white' }}>Rp. 97.900</Text>
                    <Text style={{ fontSize: 9, marginTop: 8, color: 'white' }}>Masa aktif 30 hari</Text>
                </View>
                <View style={{
                    height: 115, width: 160, borderRadius: 10, backgroundColor: '#CB56C8', padding: 13,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 7,
                }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>INTERNET</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>32GB DISC20%</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Rp</Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>53.000</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', fontSize: 12, color: 'white' }}>Rp. 65.900</Text>
                    <Text style={{ fontSize: 9, marginTop: 8, color: 'white' }}>Masa aktif 30 hari</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeRecommendPackage

const styles = StyleSheet.create({
})