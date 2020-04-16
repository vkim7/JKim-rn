import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as cartActions from '../redux/cart/cart-actions';
import * as favoritesActions from '../redux/favorites/favorites-actions';
import { selectFavoriteItems } from '../redux/favorites/favorites-selectors';
import { Button } from '../components/basic/Button';
import CacheImage from '../components/CacheImage';

const ProductDetailsScreen = (props) => {
  const product = props.route.params.product;
  const { favoriteItems } = props;
  const { name, imageUrlLarge, price } = product;
  const dispatch = useDispatch();

  const existingItem = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === product.id
  );

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.touchable}>
      <View style={styles.header}>
        <TouchableCmp
          style={{ marginLeft: 15, width: '10%' }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons
            name={Platform.select({
              ios: 'ios-arrow-round-back',
              android: 'md-arrow-round-back',
            })}
            size={35}
            color={'white'}
          />
        </TouchableCmp>
        {existingItem ? (
          <TouchableCmp
            style={{ marginLeft: 15, width: '10%' }}
            onPress={() => {
              dispatch(favoritesActions.toggleFavItem(product));
            }}
          >
            <Ionicons
              name={Platform.select({
                ios: 'ios-heart',
                android: 'md-heart',
              })}
              size={25}
              color={'white'}
            />
          </TouchableCmp>
        ) : (
          <TouchableCmp
            style={{ marginLeft: 15, width: '10%' }}
            onPress={() => {
              dispatch(favoritesActions.toggleFavItem(product));
            }}
          >
            <Ionicons
              name={Platform.select({
                ios: 'ios-heart-empty',
                android: 'md-heart-empty',
              })}
              size={25}
              color={'white'}
            />
          </TouchableCmp>
        )}
      </View>

      <View style={styles.imageContainer}>
        <CacheImage style={styles.image} uri={imageUrlLarge} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{name.toUpperCase()}</Text>
        <Text style={styles.price}>{`$${price}`}</Text>
        <View style={styles.actions}>
          <Button
            onPress={() => {
              dispatch(cartActions.addItem(product));
            }}
          >
            ADD TO CART
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  imageContainer: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    paddingLeft: 20,
  },
  title: {
    fontFamily: 'cantarell-bold',
    fontSize: 14,
    marginTop: 5,
    color: 'white',
  },
  price: {
    fontFamily: 'cantarell-regular',
    fontSize: 16,
    color: 'white',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
});

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

export default connect(mapStateToProps)(ProductDetailsScreen);
