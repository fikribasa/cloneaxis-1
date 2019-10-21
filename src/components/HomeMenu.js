import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'

import { getUserById } from '../publics/redux/actions/user'

class HomeMenu extends Component {
    state = { 
        credit: 0,
        name: '',
        execute: 0
     }
     componentDidMount = async() => {
         AsyncStorage.getItem('name').then(async (name) => {
             await this.setState({ name })
         })
         AsyncStorage.getItem('token').then(async (token) => {
             AsyncStorage.getItem('id_user').then(async (id_user) => {
                await this.props.dispatch(getUserById(id_user, token))
                await this.setState({ credit: this.props.user.credit })
            })
            AsyncStorage.setItem('credit', this.props.user.credit.toString())
        })
    }
    render() { 
        return (
            <View style={{ height: 270, position: 'relative' }}>
                <Image source={require('../assets/background/bg_home.webp')} style={{ resizeMode: 'cover', height: '130%', width: '100%', position: 'absolute', top: -75 }} />
                <View style={{ paddingHorizontal: 13, position: 'absolute', width: '100%' }}>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text style={{ paddingRight: 10, fontSize: 20, color: 'white' }}>Hai,</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                                { (this.state.name.length > 15) ? this.state.name.substr(0, 15) + '...' : this.state.name}
                            </Text>
                            <Text style={{ fontSize: 20, color: 'white', marginLeft: 5, fontWeight: 'bold' }}> > </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ overflow: 'hidden', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>                        
                        <View style={{ height: 55, marginTop: 15, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: '#EBEBED', width: '100%' }}>
                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#5A5A5C' }}>PULSA KAMU</Text>
                                    <Text style={{ fontSize: 13, color: '#979799' }}>Exp on 11 Okt 2019</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {
                                        (this.state.credit === 0) ?
                                        <Text style={{ color: '#6E328A', fontSize: 18, fontWeight: 'bold', marginRight: 8 }}>Loading..</Text>
                                        :
                                        <Text style={{ color: '#6E328A', fontSize: 22, fontWeight: 'bold', marginRight: 8 }}>Rp. {this.state.credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
                                    }
                                    <Image source={require('../assets/icon/ic_security_none.webp')} style={{ height: 28, width: 28 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ overflow: 'hidden', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, zIndex: 1 }}>                        
                        <View style={{ height: 105, overflow: 'hidden', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'white', width: '100%', paddingTop: 15, justifyContent: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginHorizontal: 3.5, height: 53, width: 53, alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Recommended')}>
                            <View style={styles.icon_menu}>
                                <Image source={require('../assets/icon/icon_menu_recommended_3x.webp')} style={{ height: 46, width: 46 }} />
                            </View>
                            <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', color: '#524862' }}>Recommended</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 3.5, height: 53, width: 53, alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Aigo')}>
                            <View style={styles.icon_menu}>
                                <Image source={require('../assets/icon/icon_menu_scanaigo.webp')} style={{ height: 46, width: 46 }} />
                            </View>
                            <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Isi AIGO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 3.5, height: 53, width: 53, alignItems: 'center' }} onPress={() => console.log('arey')}>
                            <View style={styles.icon_menu}>
                                <Image source={require('../assets/icon/icon_menu_sureprize_2.webp')} style={{ height: 46, width: 46 }} />
                            </View>
                            <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Surprize</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 3.5, height: 53, width: 53, alignItems: 'center' }} onPress={() => console.log('arey')}>
                            <View style={styles.icon_menu}>
                                <Image source={require('../assets/icon/icon_menu_stamp.webp')} style={{ height: 46, width: 46 }} />
                            </View>
                            <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Stamp Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 3.5, height: 53, width: 53, alignItems: 'center' }} onPress={() => this.props.navigation.navigate('QuickMenu')}>
                            <View style={styles.icon_menu}>
                                <Image source={require('../assets/icon/icon_menu_other.webp')} style={{ height: 46, width: 46 }} />
                            </View>
                            <Text style={{ fontSize: 8.91, marginTop: 5, fontWeight: 'bold', textAlign: 'center', color: '#524862' }}>Lainnya</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Paket kamu saat ini</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        user : state.user.user.rows
    }
}

export default withNavigation(connect(mapStateToProps)(HomeMenu))

const styles =  StyleSheet.create({
    icon_menu : {
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