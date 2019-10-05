import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getPackageCategoryRecommended} from '../publics/redux/actions/axispackage';

class HomeRecommendPackage extends Component {
  componentDidMount = () => {
    if (this.props.recommended === undefined) this.props.dispatch(getPackageCategoryRecommended());
  };

  render() {
    return (
      <View style={{height: 180, marginTop: -10}}>
        <View
          style={{
            height: '12%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 10
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#362251',
              paddingLeft: 20
            }}>
            Rekomendasi untukmu
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 7
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Recommended')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  marginRight: 10,
                  color: '#DE4DA4'
                }}>
                LIHAT SEMUA
              </Text>
            </TouchableOpacity>
            <Image
              source={require('../assets/icon/icon_arrow2_right_pink.webp')}
              style={{width: 23, height: 23}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5
          }}>
          {this.props.recommended
            ? _.take(this.props.recommended, 2).map((recommend, index) => (
              <View style={{ overflow: 'hidden', height: 115, width: 160, borderRadius: 10, elevation: 5 }} key={ index }>
                  <TouchableOpacity
                  style={index === 1 ? styles.cardPurple : styles.cardOrange}
                  onPress={() =>
                    this.props.navigation.navigate('PackageDetails', {
                      package: recommend,
                    })
                  }
                  key={recommend.id}>
                  <Text
                    style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                    {recommend.Category.name}
                  </Text>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    {recommend.name}{' '}
                    {recommend.discount > 0 ? (
                      <Text>DISC {recommend.discount}% </Text>
                    ) : null}{' '}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>Rp</Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {recommend.discprice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </Text>
                  </View>
                  {recommend.discount > 0 ? (
                    <Text
                      style={{
                        textDecorationLine: 'line-through',
                        fontSize: 12,
                        color: 'white',
                      }}>
                      Rp.{' '}
                      {recommend.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </Text>
                  ) : null}
                  <Text style={{fontSize: 9, marginTop: 8, color: 'white'}}>
                    Masa aktif {recommend.duration} hari
                  </Text>
                </TouchableOpacity>
                </View>
              ))
            : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommended: state.axispackage.recommended.rows
  }
}

export default withNavigation(connect(mapStateToProps)(HomeRecommendPackage));

const styles = StyleSheet.create({
  cardOrange: {
    height: 115,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#F9A11B',
    padding: 13,
    marginRight: 5
  },

  cardPurple: {
    height: 115,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#CF55CE',
    padding: 13,
    marginLeft: 5
  }
});
