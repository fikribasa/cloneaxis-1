import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import Footer from '../layouts/Footer'

const Roaming = props => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity>
                    <Text style={ styles.textCategoryActive }>Semua</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={ styles.textCategory }>BRONET 24 JAM</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={ styles.textCategory }>OWSEM</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={ styles.textCategory }>OBOR Dinihari</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>AXIS PASS</Text>
                <Image source={require('../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>INTERNET MABRUR</Text>
                <Image source={require('../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>COMBO MABRUR</Text>
                <Image source={require('../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>MABRUR Nelp&SMS</Text>
                <Image source={require('../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24Jam 3GB (23% OFF)</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>30.900</Text>
                    </View>
                    <Text style={{ textDecorationLine: 'line-through', marginTop: 20, color: '#A9A9A9' }}>Rp. 39.000</Text>
                    <Text style={{ color: '#A9A9A9' }}>Masa Aktif 30 hari</Text>
                </TouchableOpacity>
            </ScrollView>
        </ScrollView>
    )
}

export default withNavigation(Roaming)

const styles = StyleSheet.create({
    card: {
        marginRight: 15,
        height: 130,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1
    },
    textCategory : {
        color: '#6D3D87', 
        padding: 10, 
        paddingHorizontal: 20, 
        marginRight: 10, 
        textAlign: 'center', 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#FABA01', 
        fontWeight: 'bold'
    },
    textCategoryActive: {
        color: 'white', 
        padding: 10, 
        paddingHorizontal: 20, 
        marginRight: 10, 
        textAlign: 'center', 
        borderRadius: 20, 
        borderWidth: 1, 
        borderColor: '#FABA01', 
        fontWeight: 'bold', 
        backgroundColor: '#FABA01'
    }
})