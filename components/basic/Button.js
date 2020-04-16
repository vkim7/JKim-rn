import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'cantarell-bold',
  },
  buttonStyle: {
    width: 150,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'white',
  },
};

export { Button };
