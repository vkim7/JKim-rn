import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import {
  selectCartItems,
  selectCartItemsTotal,
  selectCartItemsQuantity,
} from '../redux/cart/cart-selectors';

import CheckoutItem from '../components/CheckoutItem';
import { CheckoutButton } from '../components/basic';

const CheckoutScreen = ({ cartItems, total, quantity, navigation }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1.25, paddingLeft: 10 }}>
        <TouchableCmp
          style={{ marginLeft: 15, width: '10%', marginTop: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name={Platform.select({
              ios: 'ios-close',
              android: 'md-close',
            })}
            size={45}
            color={'white'}
          />
        </TouchableCmp>
        <Text style={styles.title}>SHOPPING BAG</Text>
        {quantity ? (
          <Text style={styles.items}> {`${quantity} items`} </Text>
        ) : (
          <Text
            style={styles.items}
          >{`You haven't added anything to your cart`}</Text>
        )}
      </View>
      <View style={{ marginTop: 10, flex: 6, paddingLeft: 10 }}>
        <FlatList
          data={cartItems}
          renderItem={(itemData) => <CheckoutItem itemData={itemData} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.total}>
        <Text style={styles.totalNum}>{` Total $${total}`}</Text>
        <CheckoutButton>BUY NOW</CheckoutButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingTop: 10,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 19,
    paddingLeft: 10,
    fontFamily: 'cantarell-bold',
  },
  items: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: 'cantarell-regular',
  },
  total: {
    borderTopColor: 'white',
    borderWidth: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1.25,
    backgroundColor: 'black',
  },
  totalNum: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'cantarell-regular',
  },
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
  quantity: selectCartItemsQuantity,
});

export default connect(mapStateToProps)(CheckoutScreen);
