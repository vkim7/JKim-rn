import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CheckoutButton = ({ onPress, children }) => {
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
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 7,
    paddingBottom: 10,
    fontFamily: 'cantarell-bold',
  },
  buttonStyle: {
    alignSelf: 'center',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 30,
  },
};

export { CheckoutButton };
