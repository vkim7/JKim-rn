import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: 'black',
  },
});

export { Card };
