import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView, View, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import Semua from '../components/newBoostr/semua'
import BoostrSosmed from '../components/newBoostr/boostrSosmed'
import BoostrVideo from '../components/newBoostr/boostrVideo'
import BoostrGame from '../components/newBoostr/boostrGame'
import BoostrMusik from '../components/newBoostr/boostrMusik'
import BoostrSunset from '../components/newBoostr/boostrSunset'

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
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategory}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategory}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategory}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategory}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategory}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Semua />
                </ScrollView>
            )
        } else if (category === 'sosmed') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategoryActive}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategory}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategory}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategory}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategory}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <BoostrSosmed />
                </ScrollView>
            )
        } else if (category === 'video') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategory}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategoryActive}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategory}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategory}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategory}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <BoostrVideo />
                </ScrollView>
            )
        } else if (category === 'game') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategory}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategory}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategoryActive}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategory}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategory}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <BoostrGame />
                </ScrollView>
            )
        } else if (category === 'musik') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategory}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategory}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategory}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategoryActive}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategory}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <BoostrMusik />
                </ScrollView>
            )
        } else if (category === 'sunset') {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => this.setState({ category: 'semua' })}>
                            <Text style={styles.textCategory}>Semua</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sosmed' })}>
                            <Text style={styles.textCategory}>BOOSTR SOSMED</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'video' })}>
                            <Text style={styles.textCategory}>BOOSTR VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'game' })}>
                            <Text style={styles.textCategory}>BOOSTR GAMES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'musik' })}>
                            <Text style={styles.textCategory}>BOOSTR MUSIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ category: 'sunset' })}>
                            <Text style={styles.textCategoryActive}>BOOSTR SUNSET</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <BoostrSunset />
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
        borderColor: '#EB008B',
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
        borderColor: '#EB008B',
        fontWeight: 'bold',
        backgroundColor: '#EB008B'
    }

})