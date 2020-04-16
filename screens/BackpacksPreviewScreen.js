import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../components/basic/Button';
import CacheImageBackground from '../components/CacheImageBackground';

const BackpacksPreviewScreen = (props) => {
  return (
    <View style={styles.container}>
      <CacheImageBackground
        uri='https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-8-L.jpg?alt=media&token=aad3c8e9-46d5-4156-ab7a-7acbffc4ef18'
        style={styles.image}
      >
        {/* <View style={styles.button}> */}
        <Text style={styles.textLarge}>BACKPACKS</Text>
        <Text style={styles.textSmall}>Explore the new collection</Text>
        <Button
          style={styles.button}
          title='View All'
          onPress={() => {
            props.navigation.push('BackpacksScreen');
          }}
        >
          VIEW ALL
        </Button>
        {/* </View> */}
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

export default BackpacksPreviewScreen;
