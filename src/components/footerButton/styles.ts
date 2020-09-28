import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  footer: {
    height: '15%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  puzzleChallenge: {
    height: 40,
    width: 140,
    backgroundColor: theme.color.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  text: {
    color: theme.color.creamWhite,
    opacity: 0.75,
  },
});
