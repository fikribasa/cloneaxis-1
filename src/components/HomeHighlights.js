import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const HomeHighlights = () => {
    return (
        <View style={{ height: 75, backgroundColor: '#3D2360', borderTopRightRadius: 20, borderTopLeftRadius: 20, marginHorizontal: 20, padding: 10, paddingLeft: 10, position: 'relative' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginLeft: 10 }}>Highlights</Text>
            <Text style={{ color: '#9880B4', marginLeft: 10 }}>TAP HERE TO SEE WHAT'S ON</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../assets/icon/graphic_home_4.webp')} style={{ height: 80, width: 80, top: -48, left: -57 }} />
                <Image source={require('../assets/icon/graphic_promo.webp')} style={{ height: 74, width: 74, top: -53, left: 173 }} />
            </View>
        </View>
    )
}

export default HomeHighlights

const styles = StyleSheet.create({
})