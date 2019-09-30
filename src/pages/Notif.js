import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text } from 'react-native'
import Footer from '../layouts/Footer'

const Notif = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>
                    Notif
                </Text>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default Notif