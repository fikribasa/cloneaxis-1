import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import Semua from '../components/roaming/semua'
import AxisPass from '../components/roaming/axisPass'
import InternetMabrur from '../components/roaming/internetMabrur'
import ComboMabrur from '../components/roaming/comboMabrur'
import MabrurNelpDanSms from '../components/roaming/mabrurNelpDanSms'

class NewBoostr extends Component {
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
                        <TouchableOpacity onPress={() => this.setState({ category: 'axispass' })}>
                            <Text style={styles.textCategory}>AXIS PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'internetmabrur' })}>
                            <Text style={styles.textCategory}>INTERNET MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'combomabrur' })}>
                            <Text style={styles.textCategory}>COMBO MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'mabrurnelpdansms' })}>
                            <Text style={styles.textCategory}>MABRUR Nelp&SMS</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Semua />
                </ScrollView>
            )
        } else if (category === 'axispass') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'axispass' })}>
                            <Text style={styles.textCategoryActive}>AXIS PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'internetmabrur' })}>
                            <Text style={styles.textCategory}>INTERNET MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'combomabrur' })}>
                            <Text style={styles.textCategory}>COMBO MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'mabrurnelpdansms' })}>
                            <Text style={styles.textCategory}>MABRUR Nelp&SMS</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <AxisPass />
                </ScrollView>
            )
        } else if (category === 'internetmabrur') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'axispass' })}>
                            <Text style={styles.textCategory}>AXIS PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'internetmabrur' })}>
                            <Text style={styles.textCategoryActive}>INTERNET MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'combomabrur' })}>
                            <Text style={styles.textCategory}>COMBO MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'mabrurnelpdansms' })}>
                            <Text style={styles.textCategory}>MABRUR Nelp&SMS</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <InternetMabrur />
                </ScrollView>
            )
        } else if (category === 'combomabrur') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'axispass' })}>
                            <Text style={styles.textCategory}>AXIS PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'internetmabrur' })}>
                            <Text style={styles.textCategory}>INTERNET MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'combomabrur' })}>
                            <Text style={styles.textCategoryActive}>COMBO MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'mabrurnelpdansms' })}>
                            <Text style={styles.textCategory}>MABRUR Nelp&SMS</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ComboMabrur />
                </ScrollView>
            )
        } else if (category === 'mabrurnelpdansms') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'axispass' })}>
                            <Text style={styles.textCategory}>AXIS PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'internetmabrur' })}>
                            <Text style={styles.textCategory}>INTERNET MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'combomabrur' })}>
                            <Text style={styles.textCategory}>COMBO MABRUR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'mabrurnelpdansms' })}>
                            <Text style={styles.textCategoryActive}>MABRUR Nelp&SMS</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <MabrurNelpDanSms />
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

export default withNavigation(connect(mapStateToProps)(NewBoostr))

const styles = StyleSheet.create({
    textCategory: {
        color: '#6D3D87',
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FABA01',
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
        borderColor: '#FABA01',
        fontWeight: 'bold',
        backgroundColor: '#FABA01'
    }

})