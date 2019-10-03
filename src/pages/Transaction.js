import React, {Component} from 'react';
import {TouchableOpacity, FlatList, StyleSheet, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {connect, useSelector} from 'react-redux';
import {getTransaction} from '../publics/redux/actions/transaction';

function Item({type, date, price}) {
  return (
    <TouchableOpacity>
      <Text style={styles.date}>{date}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.price}>Rp. {price}</Text>
      </View>

      <View style={styles.strip}></View>
    </TouchableOpacity>
  );
}

class Transaction extends Component {
  state = {
    transaction: [],
  };
  componentDidMount = async () => {
    await this.props.dispatch(getTransaction(1));
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    await this.setState({transaction: this.props.transaction});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {console.log('transaction', this.state.transaction)}
        <FlatList
          data={this.state.transaction}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Item
              type="Reload"
              date={
                item.createdAt.slice(0, 10) + ' ' + item.createdAt.slice(11, 19)
              }
              price={item.User.credit}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateProps = state => {
  return {
    transaction: state.transaction.transaction,
  };
};

export default connect(mapStateProps)(Transaction);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  date: {
    fontSize: 10,
    marginRight: 4,
    color: '#B3B6B7',
    marginBottom: 4,
  },
  type: {
    fontSize: 16,
    color: '#6f2d91',
  },
  price: {
    fontSize: 16,
    color: '#6f2d91',
    marginBottom: 4,
    fontWeight: 'bold',
    alignItems: 'center',
    left: 0,
  },
  strip: {
    backgroundColor: '#F2F3F4',
    height: 3,
    marginBottom: 20,
  },
});
