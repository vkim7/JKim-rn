import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from './basic';

import CacheImage from '../components/CacheImage';

const CollectionItem = ({ itemData }) => {
  const { name, imageUrl, price } = itemData.item;
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <View>
          <View style={styles.imageContainer}>
            <CacheImage style={styles.image} uri={imageUrl} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title}>{name.toUpperCase()}</Text>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 350,
    width: 196,
    margin: 5,
    backgroundColor: 'transparent',
  },
  touchable: {
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    height: '20%',
    paddingTop: 10,
    paddingLeft: 5,
  },
  title: {
    fontFamily: 'cantarell-bold',
    fontSize: 14,
    color: 'white',
  },
  price: {
    fontFamily: 'cantarell-regular',
    fontSize: 13,
    color: 'white',
  },
});

export default CollectionItem;
