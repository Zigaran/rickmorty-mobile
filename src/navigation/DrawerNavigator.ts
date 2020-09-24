import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Home } from '../screens';
import { CustomDrawerScreen } from '../components';
import { theme } from '../styled';

// @ts-ignore
const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Searcher',
      },
    },
  },
  {
    drawerBackgroundColor: 'transparent',
    contentComponent: CustomDrawerScreen,
    contentOptions: {
      activeTintColor: theme.color.black,
    },
  },
);

export const DrawerNavigator = RootDrawerNavigator;
export type DrawerRoutes = keyof typeof RootDrawerNavigator;
