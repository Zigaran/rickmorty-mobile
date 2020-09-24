import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { NavigationDrawerProp } from 'react-navigation-drawer';

export type Navigation = NavigationScreenProp<NavigationState, NavigationParams> &
  NavigationDrawerProp;
