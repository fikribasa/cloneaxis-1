import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const QuickMenu = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 140, position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={require('../assets/icon/ic_chevron_left_primary_24dp.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: '27%', fontWeight: 'bold', color: '#704D88', fontSize: 17 }}>QUICK MENU</Text>
                </View>
                <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
            </View>
            <View style={{ backgroundColor: '#D7D8DD', height: 170 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 25 }}>
                    <Text style={{ fontWeight: 'bold', color: '#704D88', paddingLeft: 20 }}>QUICK MENU ANDA</Text>
                    <Text style={{ fontWeight: 'bold', color: '#CB3691', paddingRight: 35 }}>EDIT</Text>
                </View>
                <View style={{ height: 105, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: '#D7D8DD', width: '100%', paddingTop: 15, justifyContent: 'flex-start', flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.icon_menu} onPress={() => props.navigation.navigate('Recommended')}>
                            <Image source={require('../assets/icon/icon_menu_recommended_3x.webp')} style={{ height: 46, width: 46 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', color: '#524862' }}>Recommended</Text>
                    </View>
                    <View style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.icon_menu} onPress={() => props.navigation.navigate('Aigo')}>
                            <Image source={require('../assets/icon/icon_menu_isipulsa.webp')} style={{ height: 46, width: 46 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Isi AIGO</Text>
                    </View>
                    <View style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center' }}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_sureprize_2.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Surprize</Text>
                    </View>
                    <View style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center' }}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_stamp.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Stamp Card</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 25 }}>
                    <Text style={{ fontWeight: 'bold', color: '#704D88', paddingLeft: 20 }}>QUICK MENU LAINNYA</Text>
                </View>
                <View style={{ flex: 1, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'white', width: '100%', paddingTop: 15, justifyContent: 'flex-start', flexDirection: 'row', marginHorizontal: 20, flexWrap: 'wrap' }}>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_belipaket.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', color: '#524862' }}>Beli Paket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={ () => props.navigation.navigate('Topup') }>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_isipulsa.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Isi Pulsa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={() => props.navigation.navigate('History')}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_history.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Info Transaksi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={() => props.navigation.navigate('Aigo')}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_checkaigo.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Check AIGO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={() => props.navigation.navigate('NotifStack')}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_notification_3x.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={() => props.navigation.navigate('Aigo')}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_qrcode.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>QR Code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={() => props.navigation.navigate('AboutUs')}>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_about_3x.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Tentang Axis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5, height: 53, width: 53, alignItems: 'center', marginBottom: 50 }} onPress={ () => props.navigation.navigate('Profile') }>
                        <View style={styles.icon_menu}>
                            <Image source={require('../assets/icon/icon_menu_profile_3x.webp')} style={{ height: 46, width: 46 }} />
                        </View>
                        <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default withNavigation(QuickMenu)

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
        elevation: 7
    },
})