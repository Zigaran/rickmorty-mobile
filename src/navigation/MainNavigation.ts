import { createStackNavigator } from 'react-navigation-stack';
import { DrawerNavigator } from './DrawerNavigator';
import { CharResults, LocationResults, EpisResults } from '../screens';

const noHeader = { headerShown: false };

const stack = {
  Home: {
    screen: DrawerNavigator,
    navigationOptions: noHeader,
  },

  CharResults: {
    screen: CharResults,
    navigationOptions: noHeader,
  },

  LocationResults: {
    screen: LocationResults,
    navigationOptions: noHeader,
  },

  EpisodesResults: {
    screen: EpisResults,
    navigationOptions: noHeader,
  },
};

// @ts-ignore
export const MainStack = createStackNavigator(stack);

export type MainRoutes = keyof typeof stack;
