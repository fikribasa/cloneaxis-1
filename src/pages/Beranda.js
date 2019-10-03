import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Footer from '../layouts/Footer'
import HomeMenu from '../components/HomeMenu'
import HomeUserPackage from '../components/HomeUserPackage'
import HomeRecommendPackage from '../components/HomeRecommendPackage'
import HomeSpecialPackage from '../components/HomeSpecialPackage'
import HomeHighlights from '../components/HomeHighlights'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

const Beranda = props => {
    AsyncStorage.getItem('token').then(token => {
        (!token) ? props.navigation.navigate('Login') : null
    })

    return(
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={ false }>
                <HomeMenu />
                <HomeUserPackage />
                <HomeRecommendPackage />
                <HomeSpecialPackage />
                <HomeHighlights />
            </ScrollView>
            <Footer />
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
})