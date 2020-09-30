import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.lightGray,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  title: {
    color: theme.color.white,
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.65)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
