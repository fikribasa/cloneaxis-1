import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const Header = props => {
  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
        <ImageBackground
          source={require('../assets/icon/graphic_header.png')}
          style={styles.headerbg}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{width: '30%', alignItems: 'center'}}
              onPress={() => props.navigation.navigate('MyAxis')}>
              <Image
                style={{resizeMode: 'center'}}
                source={require('../assets/icon/icon_chevron_right.webp')}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 14, color: '#5B2C6F', fontWeight: 'bold'}}>
              {props.navigation.state.routeName}
            </Text>
            <View style={{width: '20%'}}></View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default withNavigation(Header);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    top: -20,
    flex: 1,
  },
  headerbg: {
    width: '100%',
    height: 100,
    resizeMode: 'repeat',
    overflow: 'hidden',
    right: 0,
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    elevation: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5B2C6F',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B2C6F',
  },
});
