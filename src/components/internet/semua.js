import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageBronet, getPackageOwsem, getPackageObor, getPackageRabuRawit } from '../../publics/redux/actions/package/internet'

class Semua extends Component {
    componentDidMount = async () => {
        if (this.props.bronet === undefined) await this.props.dispatch(getPackageBronet())
        if (this.props.owsem === undefined) await this.props.dispatch(getPackageOwsem())
        if (this.props.obor === undefined) await this.props.dispatch(getPackageObor())
        if (this.props.raburawit === undefined) await this.props.dispatch(getPackageRabuRawit())

        let { bronet, owsem, obor, raburawit } = this.props
        await this.setState({ bronet, owsem, obor, raburawit })
    }

    render() {
        let { bronet, owsem, obor, raburawit } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>Bronet 24 JAM</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (bronet) ?
                            bronet.map(bro => (
                                <View style={ styles.cardContainer } key={bro.id}>
                                    <TouchableOpacity style={styles.card} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: bro }) }>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>{bro.name} {(bro.discount > 0) ? <Text>({bro.discount}% OFF)</Text> : null} </Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                                            <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>{bro.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            {
                                                (bro.discount > 0) ?
                                                    <Text style={{ textDecorationLine: 'line-through', color: '#A9A9A9' }}>Rp. {bro.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                                    : null
                                            }
                                            <Text style={{ color: '#A9A9A9' }}>Masa Aktif {bro.duration} hari</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>OWSEM</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (owsem) ?
                            owsem.map(ow => (
                                <View style={styles.cardContainer} key={ow.id}>
                                    <TouchableOpacity style={styles.card} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: ow }) }>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6D3D87' }}>{ow.name} {(ow.discount > 0) ? <Text>({ow.discount}% OFF)</Text> : null} </Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Text style={{ fontSize: 10, color: '#F2B629', fontWeight: 'bold', marginTop: 3 }}>Rp</Text>
                                            <Text style={{ fontSize: 25, color: '#F2B629', fontWeight: 'bold' }}>{ow.discprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            {
                                                (ow.discount > 0) ?
                                                    <Text style={{ textDecorationLine: 'line-through', color: '#A9A9A9' }}>Rp. {ow.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                                    : null
                                            }
                                            <Text style={{ color: '#A9A9A9' }}>Masa Aktif {ow.duration} hari</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>OBOR Dinihari</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 50 }}>
                    {
                        (obor) ?
                            obor.map(ob => (
                                <View style={styles.cardContainer} key={ob.id}>
                                    <TouchableOpacity style={styles.card} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: ob }) }>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>PROMO RABU RAWIT</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 50 }}>
                    {
                        (raburawit) ?
                            raburawit.map(rabu => (
                                <View style={styles.cardContainer} key={rabu.id}>
                                    <TouchableOpacity style={styles.card} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: rabu }) }>
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
                                </View>
                            ))
                            : null
                    }
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
        bronet: state.internet.bronet.rows,
        owsem: state.internet.owsem.rows,
        obor: state.internet.obor.rows,
        raburawit: state.internet.raburawit.rows
    }
}

export default withNavigation(connect(mapStateToProps)(Semua))

const styles = StyleSheet.create({
    cardContainer : {
        marginRight: 15,
        height: 131,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    card: {
        height: '95%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        elevation: 1
    },
})