import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'

const Login = () => {
    return (
        <View style={{ flex: 1, position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/background/bg_login.webp')} style={{ height: '100%', width: '100%', resizeMode: 'contain', position: 'absolute' }} />
            <TextInput keyboardType='number-pad' autoFocus={true} returnKeyType='go' style={{ height: 80, width: '90%', color:'#6F2A94', elevation: 5, backgroundColor: 'white', marginTop: 130, fontSize: 40, paddingHorizontal: 20, textAlign: 'center', fontWeight: 'bold' }} maxLength={13} placeholder='083XXXXXXXXXX' onSubmitEditing={ () => props.navigation.navigate('Otp') } />
        </View>
    )
}

export default withNavigation(Login)

const styles = StyleSheet.create({
})