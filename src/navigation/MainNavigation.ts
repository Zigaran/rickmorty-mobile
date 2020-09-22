import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens';

const noHeader = { header: null };

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
};

// @ts-ignore
export const MainStack = createStackNavigator(stack);

export type MainRoutes = keyof typeof stack;
