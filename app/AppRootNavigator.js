import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


import { Explore } from './screens/Explore';
import { AddBook } from './screens/AddBook';
import { Lists as ReadingListStack } from './screens/Lists';
import { Profile } from './screens/Profile';
import { BookCase } from './screens/BookCase';

let screen = Dimensions.get('window');

let tabsIconSize = 22;

export const Tabs = createBottomTabNavigator({
    'Book': {
      screen: BookCase,
      navigationOptions: {
        tabBarLabel: 'Bookcase',
        tabBarIcon: ({ tintColor }) => <Icon name="book" type="materialIcons" size={tabsIconSize} color={tintColor} />
      },
    },
    'Explore': {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => <Icon name="explore" type="materialIcons" size={tabsIconSize} color={tintColor} />
      },
    },
    'Add Book': {
      screen: AddBook,
      navigationOptions: {
        tabBarLabel: 'Add Book',
        tabBarIcon: ({ tintColor }) => <Icon name="add" type="materialIcons" size={tabsIconSize} color={tintColor} />
      },
    },
    'Lists': {
      screen: ReadingListStack,
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={tabsIconSize} color={tintColor} />
      },
    },
    'My Profile': {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="person" type="materialIcons" size={tabsIconSize} color={tintColor} />
      },
    },
  });
  
  export const createRootNavigator = () => {
    return StackNavigator(
      {
        Tabs: {
          screen: Tabs,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal"
    }
    );
  };
