import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/basic/Button';
import CacheImageBackground from '../components/CacheImageBackground';

const ApparelPreviewScreen = (props) => {
  return (
    <View style={styles.container}>
      <CacheImageBackground
        uri='https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/collection%2FJ_KIM-11.jpg?alt=media&token=ec799e21-a8dd-417f-957e-1c5297c10f93'
        style={styles.image}
      >
        <Text style={styles.textLarge}>COLLECTION</Text>
        <Text style={styles.textSmall}>Fall-Winter 2020</Text>
        <Button
          style={styles.button}
          title='View All'
          onPress={() => {
            props.navigation.push('ApparelScreen');
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

export default ApparelPreviewScreen;
