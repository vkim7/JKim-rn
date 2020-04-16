import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0.25,
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 7.5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'white',
    position: 'relative',
    backgroundColor: 'transparent',
  },
};

export { CardSection };
