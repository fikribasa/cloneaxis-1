import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


const PackageDetails = props => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ height: 100, position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image source={require('../assets/icon/ic_chevron_left_primary_24dp.png')} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: '20%', fontWeight: 'bold', color: '#704D88', fontSize: 17 }}>MASUKAN NOMOR</Text>
                </View>
                <Image source={require('../assets/icon/graphic_header.webp')} style={{ height: 110, width: 110, top: -25, position: 'absolute', right: 0 }} />
            </View>
            <View style={{
                height: 200, marginHorizontal: 20, borderRadius: 10, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5
            }}>
                <View style={{ height: 50, backgroundColor: '#FABA01', justifyContent: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, marginLeft: 20 }}>{props.navigation.state.params.package.name} {(props.navigation.state.params.package.discount > 0) ? <Text>DISC {props.navigation.state.params.package.discount}% </Text> : null} </Text>
                </View>
                <View style={{ height: 150, flexDirection: 'row', paddingTop: 20, backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <View style={{ width: '40%', height: '90%', paddingLeft: 10 }}>
                        <Text style={{ color: '#504864', fontWeight: 'bold' }}>{props.navigation.state.params.package.Category.name.toUpperCase()}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, color: '#FABA01', fontWeight: 'bold', marginTop: 2 }}>Rp</Text>
                            <Text style={{ fontSize: 25, color: '#FABA01', fontWeight: 'bold' }}>
                                { 
                                    (props.navigation.state.params.package.discount) ? props.navigation.state.params.package.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") 
                                        : 
                                    props.navigation.state.params.package.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                }
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, height: '90%' }}>
                        <Text style={{ color: '#838383', textAlign: 'justify', paddingRight: 5 }}>{props.navigation.state.params.package.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                <Text style={{ marginBottom: 10, color: '#AEAEAE' }}>NOMOR HANDPHONE</Text>
                <View>
                    <TextInput keyboardType='number-pad' style={{ borderWidth: 1, borderColor: '#AEAEAE', fontSize: 25, color: '#434343', paddingLeft: 8 }}>083807106451</TextInput>
                </View>
            </View>
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
                <TouchableOpacity style={{ width: 150, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00E5BC', borderRadius: 20 }}>
                    <Text style={{ padding: 12, fontWeight: 'bold', color: 'white', fontSize: 20 }}>LANJUT</Text>
                    <Image source={require('../assets/icon/icon_arrow_right_white.webp')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default PackageDetails

const styles = StyleSheet.create({
})