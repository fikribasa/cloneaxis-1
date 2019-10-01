import React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Footer from '../layouts/Footer'
import HomeMenu from '../components/HomeMenu'
import HomeUserPackage from '../components/HomeUserPackage'
import HomeRecommendPackage from '../components/HomeRecommendPackage'
import HomeSpecialPackage from '../components/HomeSpecialPackage'
import HomeHighlights from '../components/HomeHighlights'


const Beranda = () => {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={ false }>
                <HomeMenu />
                <HomeUserPackage />
                <HomeRecommendPackage />
                <HomeSpecialPackage />
                <HomeHighlights />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

export default Beranda

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