import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text } from 'react-native'
import Footer from '../layouts/Footer'

const BeliPaket = () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>
                    BeliPaket
                </Text>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default BeliPaket