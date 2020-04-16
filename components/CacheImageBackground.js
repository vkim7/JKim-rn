import React from 'react';
import { ImageBackground } from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';

export default class CacheImageBackground extends React.Component {
  state = {
    source: null,
  };

  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);

    if (image.exists) {
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      return;
    }

    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
  };

  render() {
    return (
      <ImageBackground style={this.props.style} source={this.state.source}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
