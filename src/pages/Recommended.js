import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'

const Recommended = props => {
    return (
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity style={{
                    width: 170, height: 140, margin: 5, padding: 15, backgroundColor: '#F9A11B', borderRadius: 10, 
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5, }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>INTERNET</Text>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}>10GB DISC 40%</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Rp</Text>
                        <Text style={{ fontSize: 18, color:'white', fontWeight: 'bold' }}>50.000</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: 'white', textDecorationLine: 'line-through' }}>Rp. 90.000</Text>
                    <Text style={{ fontSize: 13, color: 'white', marginTop: 10 }}>Masa aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 170, height: 140, margin: 5, padding: 15, backgroundColor: '#F9A11B', borderRadius: 10, 
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5, }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>INTERNET</Text>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}>10GB DISC 40%</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Rp</Text>
                        <Text style={{ fontSize: 18, color:'white', fontWeight: 'bold' }}>50.000</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: 'white', textDecorationLine: 'line-through' }}>Rp. 90.000</Text>
                    <Text style={{ fontSize: 13, color: 'white', marginTop: 10 }}>Masa aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 170, height: 140, margin: 5, padding: 15, backgroundColor: '#F9A11B', borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>INTERNET</Text>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}>10GB DISC 40%</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Rp</Text>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>50.000</Text>
                    </View>
                    <Text style={{ fontSize: 11, color: 'white', textDecorationLine: 'line-through' }}>Rp. 90.000</Text>
                    <Text style={{ fontSize: 13, color: 'white', marginTop: 10 }}>Masa aktif 30 hari</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default withNavigation(Recommended)

const styles = StyleSheet.create({
    icon_menu: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 1
    },
})