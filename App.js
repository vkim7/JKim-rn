import React, { useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';

import ShopReducer from './redux/shop/shop-reducer';
import CartReducer from './redux/cart/cart-reducer';
import FavoritesReducer from './redux/favorites/favorites-reducer';
import UserReducer from './redux/user/user-reducer';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import TabsNavigator from './navigation/MainNavigator';

enableScreens();

const rootReducer = combineReducers({
  shop: ShopReducer,
  cart: CartReducer,
  favorites: FavoritesReducer,
  user: UserReducer,
});

const store = createStore(rootReducer);

class App extends Component {
  state = {
    isReady: false,
  };

  fetchFonts = () => {
    return Font.loadAsync({
      'cantarell-regular': require('./assets/fonts/Cantarell-Regular.ttf'),
      'cantarell-bold': require('./assets/fonts/Cantarell-Bold.ttf'),
      'cantarell-bold-italic': require('./assets/fonts/Cantarell-BoldItalic.ttf'),
      'cantarell-italic': require('./assets/fonts/Cantarell-Italic.ttf'),
    });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.fetchFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabsNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
