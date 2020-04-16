import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFavoriteItems } from '../redux/favorites/favorites-selectors';

import FavoriteItem from '../components/FavoriteItem';

const FavoritesScreen = ({ favorites }) => {
  return (
    <View style={styles.container}>
      {favorites.length ? (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => (
            <View>
              <FavoriteItem itemData={itemData} />
            </View>
          )}
        />
      ) : (
        <Text
          style={styles.text}
        >{`You haven't added anything to your favorites.`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  text: {
    fontSize: 19,
    fontFamily: 'cantarell-bold',
    color: 'white',
    paddingTop: 25,
  },
});

const mapStateToProps = createStructuredSelector({
  favorites: selectFavoriteItems,
});

export default connect(mapStateToProps)(FavoritesScreen);
