import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../components/basic/Button';
import CacheImageBackground from '../components/CacheImageBackground';

const AccessoriesPreviewScreen = (props) => {
  return (
    <View style={styles.container}>
      <CacheImageBackground
        uri='https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-21-L.jpg?alt=media&token=afed2e3f-f788-4ed6-9daf-3f9107ba4b84'
        style={styles.image}
      >
        <Text style={styles.textLarge}>ACCESSORIES</Text>
        <Text style={styles.textSmall}>Explore the new collection</Text>
        <Button
          style={styles.button}
          title='View All'
          onPress={() => {
            props.navigation.push('AccessoriesScreen');
          }}
        >
          VIEW ALL
        </Button>
      </CacheImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textLarge: {
    fontSize: 32,
    alignSelf: 'center',
    fontFamily: 'cantarell-bold',
    color: 'white',
  },
  textSmall: {
    fontSize: 22,
    alignSelf: 'center',
    fontFamily: 'cantarell-regular',
    color: 'white',
    marginBottom: 10,
  },
});

export default AccessoriesPreviewScreen;
