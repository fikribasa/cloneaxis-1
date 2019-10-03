import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageAxisPass } from '../../publics/redux/actions/package/roaming'

class AxisPass extends Component {
    componentDidMount = async () => {
        if (this.props.axispass === undefined) await this.props.dispatch(getPackageAxisPass())
    }

    render() {
        let { axispass } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>AXIS PASS</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 7 }}>
                    {
                        (axispass) ?
                            axispass.map(item => (
                                <TouchableOpacity style={styles.card} key={item.id} onPress={() => this.props.navigation.navigate('PackageDetails', { package: item })}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>{item.name} {(item.discount > 0) ? <Text>({item.discount}% OFF)</Text> : null} </Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                                        <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>{item.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                    </View>
                                    <View style={{ marginTop: 20 }}>
                                        {
                                            (item.discount > 0) ?
                                                <Text style={{ textDecorationLine: 'line-through', color: '#A9A9A9' }}>Rp. {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                                : null
                                        }
                                        <Text style={{ color: '#A9A9A9' }}>Masa Aktif {item.duration} hari</Text>
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
        axispass: state.roaming.axispass.rows
    }
}

export default withNavigation(connect(mapStateToProps)(AxisPass))

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