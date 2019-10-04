import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Footer from '../layouts/Footer'
import HomeMenu from '../components/HomeMenu'
import HomeUserPackage from '../components/HomeUserPackage'
import HomeRecommendPackage from '../components/HomeRecommendPackage'
import HomeSpecialPackage from '../components/HomeSpecialPackage'
import HomeHighlights from '../components/HomeHighlights'

const Beranda = props => {
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