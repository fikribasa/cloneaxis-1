import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import Semua from '../components/teleponDanSms/semua'
import Kangen from '../components/teleponDanSms/kangen'
import Curhat from '../components/teleponDanSms/curhat'

class TeleponDanSms extends Component {
    state = {
        category: 'semua'
    }

    render() {
        let { category } = this.state
        if (category === 'semua') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategoryActive}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'curhat' })}>
                            <Text style={styles.textCategory}>CURHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'kangen' })}>
                            <Text style={styles.textCategory}>KANGEN</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Semua />
                </ScrollView>
            )
        } else if (category === 'curhat') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'curhat' })}>
                            <Text style={styles.textCategoryActive}>CURHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'kangen' })}>
                            <Text style={styles.textCategory}>KANGEN</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Curhat />
                </ScrollView>
            )
        } else if (category === 'kangen') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'curhat' })}>
                            <Text style={styles.textCategory}>CURHAT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'kangen' })}>
                            <Text style={styles.textCategoryActive}>KANGEN</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Kangen />
                </ScrollView>
            )
        } else {
            return <Text>LOADING.....</Text>
        }
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withNavigation(connect(mapStateToProps)(TeleponDanSms))

const styles = StyleSheet.create({
    textCategory: {
        color: '#6D3D87',
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#743C93',
        fontWeight: 'bold'
    },
    textCategoryActive: {
        color: 'white',
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#743C93',
        fontWeight: 'bold',
        backgroundColor: '#743C93'
    }

})