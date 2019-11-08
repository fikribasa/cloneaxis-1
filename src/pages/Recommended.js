import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { getPackageCategoryRecommended } from '../publics/redux/actions/axispackage'

import { connect } from 'react-redux'

class Recommended extends Component {
    componentDidMount = () => {
        if (this.props.recommended === undefined) this.props.dispatch(getPackageCategoryRecommended())
    }
    
    render() { 
        return (
            <ScrollView style={{ flex: 1, marginTop: 50 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        (this.props.recommended) ?
                            this.props.recommended.map(recommend => (
                                <View style={{ width: 170, height: 140, margin: 5, elevation: 4, borderRadius: 10, overflow: 'hidden' }} key={recommend.id}>
                                    <TouchableOpacity style={{ width: '100%', height: '100%', padding: 15, backgroundColor: '#F9A11B', borderRadius: 10 }} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: recommend }) }>
                                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{ recommend.Category.name }</Text>
                                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}>{recommend.name} {(recommend.discount > 0) ? <Text>DISC {recommend.discount}% </Text> : null} </Text>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Rp</Text>
                                            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{ recommend.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }</Text>
                                        </View>
                                        {
                                            (recommend.discount > 0) ? <Text style={{ fontSize: 11, color: 'white', textDecorationLine: 'line-through' }}>Rp. {recommend.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text> : null
                                        }
                                        <Text style={{ fontSize: 13, color: 'white', marginTop: 10 }}>Masa aktif { recommend.duration } hari</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        : null
                    }
                </View>
            </ScrollView>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        recommended: state.axispackage.recommended.rows
    }
}

export default withNavigation(connect(mapStateToProps)(Recommended))

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