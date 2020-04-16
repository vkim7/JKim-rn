import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as favoritesActions from '../redux/favorites/favorites-actions';
import { selectFavoriteItems } from '../redux/favorites/favorites-selectors';
import CacheImage from './CacheImage';

const FavoriteItem = (props) => {
  const { name, imageUrl, price } = props.itemData.item;
  const item = props.itemData.item;
  const { favoriteItems } = props;
  const dispatch = useDispatch();

  const existingItem = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === item.id
  );

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
        {existingItem ? (
          <TouchableCmp
            style={styles.icon}
            onPress={() => {
              dispatch(favoritesActions.toggleFavItem(item));
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
            style={styles.icon}
            onPress={() => {
              dispatch(favoritesActions.toggleFavItem(item));
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
    fontSize: 19,
    fontFamily: 'cantarell-bold',
    color: 'white',
    width: '100%',
  },
  price: {
    fontFamily: 'cantarell-regular',
    fontSize: 17,
    color: 'white',
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 85,
    marginRight: 25,
  },
});

const mapStateToProps = createStructuredSelector({
  favoriteItems: selectFavoriteItems,
});

export default connect(mapStateToProps)(FavoriteItem);
