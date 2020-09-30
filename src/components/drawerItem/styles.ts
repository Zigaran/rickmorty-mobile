import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  drawerItem: {
    backgroundColor: theme.color.gray,
    justifyContent: 'center',
    height: 45,
    width: '100%',
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBackground: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: theme.color.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  drawerText: {
    color: theme.color.creamWhite,
    fontSize: 15,
    width: '75%',
    paddingLeft: 10,
  },

  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: theme.color.green,
  },
});
