import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import { getPackageGame, getPackageMusik, getPackageSosmed, getPackageSunset, getPackageVideo } from '../../publics/redux/actions/package/newBoostr'

class Semua extends Component {
    componentDidMount = async () => {
        if (this.props.boostrSosmed === undefined) await this.props.dispatch(getPackageSosmed())
        if (this.props.boostrMusik === undefined) await this.props.dispatch(getPackageMusik())
        if (this.props.boostrSunset === undefined) await this.props.dispatch(getPackageSunset())
        if (this.props.boostrVideo === undefined) await this.props.dispatch(getPackageVideo())
        if (this.props.boostrGame === undefined) await this.props.dispatch(getPackageGame())
    }

    render() {
        let { boostrSosmed, boostrMusik, boostrVideo, boostrSunset, boostrGame } = this.props
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>BOOSTR SOSMED</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (boostrSosmed) ?
                            boostrSosmed.map(item => (
                                <View style={ styles.cardContainer }>
                                    <TouchableOpacity style={styles.card} key={item.id} onPress={ () => this.props.navigation.navigate('PackageDetails', { package: item }) }>
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
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>BOOSTR VIDEO</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (boostrVideo) ?
                            boostrVideo.map(item => (
                                <View style={styles.cardContainer}>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>BOOSTR GAMES</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (boostrGame) ?
                            boostrGame.map(item => (
                                <View style={styles.cardContainer}>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>BOOSTR MUSIK</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (boostrMusik) ?
                            boostrMusik.map(item => (
                                <View style={styles.cardContainer}>
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
                                </View>
                            ))
                            : null
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#6D3D87' }}>BOOSTR SUNSET</Text>
                    <Image source={require('../../assets/icon/ic_info_pink.webp')} style={{ height: 25, width: 25 }} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, marginBottom: 30 }}>
                    {
                        (boostrSunset) ?
                            boostrSunset.map(item => (
                                <View style={styles.cardContainer}>
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
        boostrGame: state.newBoostr.game.rows,
        boostrVideo: state.newBoostr.video.rows,
        boostrSunset: state.newBoostr.sunset.rows,
        boostrMusik: state.newBoostr.musik.rows,
        boostrSosmed: state.newBoostr.sosmed.rows
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