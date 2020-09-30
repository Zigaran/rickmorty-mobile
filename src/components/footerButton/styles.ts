import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  footer: {
    height: '15%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
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
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
