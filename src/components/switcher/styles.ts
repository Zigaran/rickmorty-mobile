import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  switcher: {
    backgroundColor: theme.color.gray,
    justifyContent: 'center',
    height: 45,
    width: '100%',
    opacity: 0.75,
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

  switcherText: {
    color: theme.color.creamWhite,
    fontSize: 15,
    width: '70%',
    paddingLeft: 10,
  },
});
