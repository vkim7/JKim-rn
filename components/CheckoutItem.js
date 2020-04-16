import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import * as cartActions from '../redux/cart/cart-actions';
import CacheImage from '../components/CacheImage';

const CheckoutItem = ({ itemData }) => {
  const { name, quantity, imageUrl, price } = itemData.item;
  const dispatch = useDispatch();

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <CacheImage style={styles.image} uri={imageUrl} />
      </View>
      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={styles.name}>{name.toUpperCase()}</Text>
        <View>
          <Text style={styles.price}>{`Price: $${price}`}</Text>
        </View>
        <View style={styles.quantity}>
          <TouchableCmp
            style={{ marginTop: 1.5, width: '15%' }}
            onPress={() => {
              dispatch(cartActions.removeItem(itemData.item));
            }}
          >
            <View style={styles.arrow}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-back',
                  android: 'md-arrow-back',
                })}
                size={22}
                color={'white'}
              />
            </View>
          </TouchableCmp>

          <Text style={styles.quantityNum}>{quantity}</Text>

          <TouchableCmp
            style={{ marginTop: 1.5, width: '15%' }}
            onPress={() => {
              dispatch(cartActions.addItem(itemData.item));
            }}
          >
            <View style={styles.arrow}>
              <Ionicons
                name={Platform.select({
                  ios: 'ios-arrow-forward',
                  android: 'md-arrow-forward',
                })}
                size={22}
                color={'white'}
              />
            </View>
          </TouchableCmp>
        </View>

        <TouchableCmp
          style={{
            alignSelf: 'flex-end',
            marginTop: 85,
            marginRight: 25,
          }}
          onPress={() => {
            dispatch(cartActions.clearItemFromCart(itemData.item));
          }}
        >
          <Ionicons
            name={Platform.select({
              ios: 'ios-trash',
              android: 'md-trash',
            })}
            size={25}
            color={'white'}
          />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    height: 220,
    borderRadius: 0,
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: '95%',
  },
  name: {
    fontSize: 15,
    fontFamily: 'cantarell-bold',
    color: 'white',
    width: '100%',
  },
  quantity: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 0,
  },
  quantityNum: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 5,
  },
  price: {
    fontFamily: 'cantarell-regular',
    fontSize: 15,
    color: 'white',
  },
  arrow: {
    alignItems: 'center',
  },
});

export default CheckoutItem;
