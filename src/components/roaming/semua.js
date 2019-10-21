import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageMabrurNelpDanSms, getPackageAxisPass, getPackageComboMabrur, getPackageInternetMabrur } from '../../publics/redux/actions/package/roaming'

class Semua extends Component {
    componentDidMount = async () => {
        if (this.props.mabrurnelpdansms === undefined) await this.props.dispatch(getPackageMabrurNelpDanSms())
        if (this.props.axispass === undefined) await this.props.dispatch(getPackageAxisPass())
        if (this.props.combomabrur === undefined) await this.props.dispatch(getPackageComboMabrur())
        if (this.props.internetmabrur === undefined) await this.props.dispatch(getPackageInternetMabrur())
    }

    render() {
        let { axispass, internetmabrur, combomabrur, mabrurnelpdansms } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>AXIS PASS</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (axispass) ?
                            axispass.map(item => (
                                <View style={styles.cardContainer} key={item.id}>
                                    <TouchableOpacity style={styles.card} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: item }) }>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>INTERNET MABRUR</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (internetmabrur) ?
                            internetmabrur.map(item => (
                                <View style={styles.cardContainer} key={item.id}>
                                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('PackageDetails', { package: item })}>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>COMBO MABRUR</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (combomabrur) ?
                            combomabrur.map(item => (
                                <View style={styles.cardContainer} key={item.id}>
                                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('PackageDetails', { package: item })}>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>MABRUR Nelp&SMS</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (mabrurnelpdansms) ?
                            mabrurnelpdansms.map(item => (
                                <View style={styles.cardContainer} key={item.id}>
                                    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('PackageDetails', { package: item })}>
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
        axispass: state.roaming.axispass.rows,
        internetmabrur: state.roaming.internetmabrur.rows,
        combomabrur: state.roaming.combomabrur.rows,
        mabrurnelpdansms: state.roaming.mabrurnelpdansms.rows
    }
}

export default withNavigation(connect(mapStateToProps)(Semua))

const styles = StyleSheet.create({
    cardContainer: {
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