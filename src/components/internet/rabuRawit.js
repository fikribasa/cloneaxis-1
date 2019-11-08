import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageRabuRawit } from '../../publics/redux/actions/package/internet'

class RabuRawit extends Component {
    componentDidMount = async () => {
        if (!this.props.raburawit.length) await this.props.dispatch(getPackageRabuRawit())
    }

    render() {
        let { raburawit } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>PROMO RABU RAWIT</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                        {
                            (raburawit) ?
                                raburawit.map(rabu => (
                                    <TouchableOpacity style={styles.card} key={rabu.id} onPress={() => this.props.navigation.navigate('PackageDetails', { package: rabu })}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>{rabu.name} {(rabu.discount > 0) ? <Text>({rabu.discount}% OFF)</Text> : null} </Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                                            <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>{rabu.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            {
                                                (rabu.discount > 0) ?
                                                    <Text style={{ textDecorationLine: 'line-through', color: '#A9A9A9' }}>Rp. {rabu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                                    : null
                                            }
                                            <Text style={{ color: '#A9A9A9' }}>Masa Aktif {rabu.duration} hari</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                                : null
                        }
                    </View>
                </ScrollView>
            </View>
        )
        // }else{
        //     return <Text>LOADING.....</Text>
        // }
    }
}

const mapStateToProps = state => {
    return {
        raburawit: state.internet.raburawit.rows
    }
}

export default withNavigation(connect(mapStateToProps)(RabuRawit))

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        height: 170,
        width: 170,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 1
    }
})