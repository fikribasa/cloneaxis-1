import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import Obor from '../components/internet/obor'
import Semua from '../components/internet/semua'
import Owsem from '../components/internet/owsem'
import Bronet from '../components/internet/bronet'
import RabuRawit from '../components/internet/rabuRawit'

class Internet extends Component {
    state = {
        category: 'semua'
    }

    render() { 
        let { category } = this.state
        if(category === 'semua'){
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={ () => this.setState({ category: 'semua' }) }>
                            <Text style={styles.textCategoryActive}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.setState({ category: 'bronet' }) }>
                            <Text style={styles.textCategory}>BRONET 24 JAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.setState({ category: 'owsem' }) }>
                            <Text style={styles.textCategory}>OWSEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.setState({ category: 'obor' }) }>
                            <Text style={styles.textCategory}>OBOR Dinihari</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.setState({ category: 'raburawit' }) }>
                            <Text style={styles.textCategory}>PROMO RABU RAWIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Semua />
                </ScrollView>
            )
        }else if(category === 'bronet'){
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'bronet' })}>
                            <Text style={styles.textCategoryActive}>BRONET 24 JAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'owsem' })}>
                            <Text style={styles.textCategory}>OWSEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'obor' })}>
                            <Text style={styles.textCategory}>OBOR Dinihari</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'raburawit' })}>
                            <Text style={styles.textCategory}>PROMO RABU RAWIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Bronet />
                </ScrollView>
            )
        } else if (category === 'owsem') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'bronet' })}>
                            <Text style={styles.textCategory}>BRONET 24 JAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'owsem' })}>
                            <Text style={styles.textCategoryActive}>OWSEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'obor' })}>
                            <Text style={styles.textCategory}>OBOR Dinihari</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'raburawit' })}>
                            <Text style={styles.textCategory}>PROMO RABU RAWIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Owsem />
                </ScrollView>
            )
        }else if(category === 'obor'){
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'bronet' })}>
                            <Text style={styles.textCategory}>BRONET 24 JAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'owsem' })}>
                            <Text style={styles.textCategory}>OWSEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'obor' })}>
                            <Text style={styles.textCategoryActive}>OBOR Dinihari</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'raburawit' })}>
                            <Text style={styles.textCategory}>PROMO RABU RAWIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Obor />
                </ScrollView>
            )
        } else if (category === 'raburawit') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'bronet' })}>
                            <Text style={styles.textCategory}>BRONET 24 JAM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'owsem' })}>
                            <Text style={styles.textCategory}>OWSEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'obor' })}>
                            <Text style={styles.textCategory}>OBOR Dinihari</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'raburawit' })}>
                            <Text style={styles.textCategoryActive}>PROMO RABU RAWIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <RabuRawit/>
                </ScrollView>
            )
        }else{
            return <Text>LOADING.....</Text>
        }
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withNavigation(connect(mapStateToProps)(Internet))

const styles = StyleSheet.create({
    textCategory: {
        color: '#6D3D87',
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#00E5BC',
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
        borderColor: '#00E5BC',
        fontWeight: 'bold',
        backgroundColor: '#00E5BC'
    }
})