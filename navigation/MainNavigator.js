import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import CheckoutScreen from '../screens/CheckoutScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

import AccessoriesScreen from '../screens/AccessoriesScreen';
import BackpacksScreen from '../screens/BackpacksScreen';
import ApparelScreen from '../screens/ApparelScreen';

import ApparelPreviewScreen from '../screens/ApparelPreviewScreen';
import AccessoriesPreviewScreen from '../screens/AccessoriesPreviewScreen';
import BackpacksPreviewScreen from '../screens/BackpacksPreviewScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: 'black',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitleStyle: {
    fontFamily: 'cantarell-bold',
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontFamily: 'cantarell-bold',
  },
  headerTintColor: 'white',
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const CollectionsNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName='APPAREL'
      tabBarOptions={{
        labelStyle: {
          fontSize: 13,
          color: 'white',
          fontFamily: 'cantarell-bold',
        },
        tabStyle: { flex: 1 },
        indicatorStyle: { backgroundColor: 'white' },
        style: {
          backgroundColor: 'black',
          marginTop: 0,
          paddingTop: 30,
        },
      }}
    >
      <TopTab.Screen name='ACCESSORIES' component={AccessoriesNavigator} />
      <TopTab.Screen name='APPAREL' component={ApparelNavigator} />
      <TopTab.Screen name='BACKPACKS' component={BackpacksNavigator} />
    </TopTab.Navigator>
  );
};

const ApparelNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ApparelPreviewScreen'
        component={ApparelPreviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ApparelScreen'
        component={ApparelScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetailsScreen'
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AccessoriesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccessoriesPreviewScreen'
        component={AccessoriesPreviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AccessoriesScreen'
        component={AccessoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetailsScreen'
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BackpacksNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='BackpacksPreviewScreen'
        component={BackpacksPreviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BackpacksScreen'
        component={BackpacksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProductDetailsScreen'
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FAVORITES'
        component={FavoritesScreen}
        options={defaultStackNavOptions}
      />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const CheckoutNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CHECKOUT'
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LOGIN'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Collections'
      tabBarOptions={{
        showLabel: false,
        labelStyle: {
          fontSize: 13,
          color: 'white',
          fontFamily: 'cantarell-bold',
        },
        style: {
          paddingTop: 10,
          backgroundColor: 'black',
          height: 70,
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name='Favorites'
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={Platform.select({
                  ios: 'ios-heart-empty',
                  android: 'md-heart-empty',
                })}
                size={25}
                color={'white'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name='Collections'
        component={CollectionsNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={Platform.select({
                  ios: 'ios-pricetags',
                  android: 'md-pricetags',
                })}
                size={25}
                color={'white'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name='Login'
        component={LoginNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <SimpleLineIcons name='user' size={21} color={'white'} />;
          },
        }}
      />

      <Tab.Screen
        name='Checkout'
        component={CheckoutNavigator}
        options={{
          tabBarVisible: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={Platform.select({
                  ios: 'ios-cart',
                  android: 'md-cart',
                })}
                size={25}
                color={'white'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
