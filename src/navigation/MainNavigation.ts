import { createStackNavigator } from 'react-navigation-stack';
import { DrawerNavigator } from './DrawerNavigator';
import { Results } from '../screens';

const noHeader = { headerShown: false };

const stack = {
  Home: {
    screen: DrawerNavigator,
    navigationOptions: noHeader,
  },

  Results: {
    screen: Results,
    navigationOptions: noHeader,
  },
};

// @ts-ignore
export const MainStack = createStackNavigator(stack);

export type MainRoutes = keyof typeof stack;
