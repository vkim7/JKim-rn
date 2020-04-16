import React from 'react';
import {
  View,
  FlatList,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../redux/shop/shop-selectors';

import CollectionItem from '../components/CollectionItem';

const BackpacksScreen = (props) => {
  const { collections } = props;
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const selectItemHandler = (coll) => {
    props.navigation.push('ProductDetailsScreen', {
      product: coll,
    });
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
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
      <FlatList
        data={collections[1].items}
        numColumns={2}
        renderItem={(itemData) => (
          <TouchableCmp
            useForeground
            onPress={() => {
              selectItemHandler(itemData.item);
            }}
          >
            <CollectionItem itemData={itemData} />
          </TouchableCmp>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title='Next screen'
        onPress={() => {
          props.navigation.navigate('ProductDetails');
        }}
      />
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(BackpacksScreen);
