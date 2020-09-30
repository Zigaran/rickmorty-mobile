import { createStackNavigator } from 'react-navigation-stack';
import { DrawerNavigator } from './DrawerNavigator';
import { Results } from '../screens';

const noHeader = { headerShown: false };

const stack = {
  Results: {
    screen: Results,
    navigationOptions: noHeader,
  },

  Home: {
    screen: DrawerNavigator,
    navigationOptions: noHeader,
  },
};

// @ts-ignore
export const MainStack = createStackNavigator(stack);

export type MainRoutes = keyof typeof stack;
