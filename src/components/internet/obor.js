import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageObor } from '../../publics/redux/actions/package/internet'

class Obor extends Component {
    componentDidMount = async () => {
        if (!this.props.obor.length) await this.props.dispatch(getPackageObor())
    }

    render() {
        let { obor } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>OBOR Dinihari</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                        {
                            (obor) ?
                                obor.map(ob => (
                                    <TouchableOpacity style={styles.card} key={ob.id} onPress={() => this.props.navigation.navigate('PackageDetails', { package: ob })}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>{ob.name} {(ob.discount > 0) ? <Text>({ob.discount}% OFF)</Text> : null} </Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                                            <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>{ob.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            {
                                                (ob.discount > 0) ?
                                                    <Text style={{ textDecorationLine: 'line-through', color: '#A9A9A9' }}>Rp. {ob.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                                    : null
                                            }
                                            <Text style={{ color: '#A9A9A9' }}>Masa Aktif {ob.duration} hari</Text>
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
        obor: state.internet.obor.rows
    }
}

export default withNavigation(connect(mapStateToProps)(Obor))

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