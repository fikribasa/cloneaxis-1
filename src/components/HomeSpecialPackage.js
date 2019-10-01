import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const HomeSpecialPackage = () => {
    return (
        <View style={{ height: 250, marginTop: 10, marginBottom: 20 }}>
            <View style={{ height: '12%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#362251', paddingLeft: 20 }}>Spesial Untukmu!</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                    <Image source={require('../assets/icon/ic_info_pink.webp')} style={{ width: 23, height: 23 }} />
                </View>
            </View>
            <View style={{ height: 250, marginTop: -15 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 20, height: 20 }}>
                    <View style={{ height: 230, width: 170, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white'}}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <Image source={require('../assets/brand/line.png')} style={{ width: 50, height: 50, marginTop: -35, zIndex: 2 }} />
                            <Text style={{ fontSize: 20, marginTop: 15 }}>Kuota LINE</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D' }}>100MB</Text>
                            <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>FREE</Text>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 1 hari</Text>
                        </View>
                    </View>
                    <View style={{ height: 230, width: 170, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <View style={{ width: 90, height: 40, marginTop: -35 }}>
                                <Image source={require('../assets/brand/joox.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={{ fontSize: 20, marginTop: 15 }}>Kuota JOOX</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D' }}>100MB</Text>
                            <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>FREE</Text>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 1 hari</Text>
                        </View>
                    </View>
                    <View style={{ height: 230, width: 170, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <View style={{ width: 90, height: 60, marginTop: -40, flexDirection: 'row' }}>
                                <Image source={require('../assets/brand/tiktok.png')} style={{ width: '50%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={{ fontSize: 20, marginTop: 5 }}>Kuota TIKTOK</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D' }}>100MB</Text>
                            <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>FREE</Text>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 1 hari</Text>
                        </View>
                    </View>
                    <View style={{ height: 230, width: 170, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <View style={{ width: 90, height: 60, marginTop: -50, flexDirection: 'row' }}>
                                <Image source={require('../assets/brand/smule.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={{ fontSize: 20, marginTop: 15 }}>Kuota SMULE</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3D3D3D' }}>100MB</Text>
                            <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>FREE</Text>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 1 hari</Text>
                        </View>
                    </View>
                    <View style={{ height: 230, width: 170, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <View style={{ width: 90, height: 60, marginTop: -50, flexDirection: 'row' }}>
                                <Image source={require('../assets/brand/smule.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Kuota SMULE</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>1GB</Text>
                            <View style={{ flexDirection:'row' }}>
                                <Text style={{ fontSize: 11, color: '#6A318B', fontWeight: 'bold', marginTop:5 }}>Rp.</Text>
                                <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>3.500</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 7 hari</Text>
                        </View>
                    </View>
                    <View style={{ height: 230, width: 170, marginRight: 30, paddingVertical: 25, alignItems: 'center', backgroundColor: 'white' }}>
                        <View style={{
                            height: 165, width: '100%', borderRadius: 10, backgroundColor: 'white', padding: 13, width: 150,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 7
                        }}>
                            <View style={{ width: 90, height: 60, marginTop: -50, flexDirection: 'row' }}>
                                <Image source={require('../assets/brand/hago.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Kuota HAGO</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>1GB</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 11, color: '#6A318B', fontWeight: 'bold', marginTop:5 }}>Rp.</Text>
                                <Text style={{ fontSize: 25, color: '#6A318B', fontWeight: 'bold' }}>3.500</Text>
                            </View>
                            <Text style={{ fontSize: 13, marginTop: 10 }}>Masa aktif 7 hari</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeSpecialPackage

const styles = StyleSheet.create({
})