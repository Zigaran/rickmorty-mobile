import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 85,
    borderRadius: 10,
    backgroundColor: theme.color.creamWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  image: {
    borderRadius: 10,
    width: 85,
    height: '100%',
    resizeMode: 'cover',
  },

  name: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: theme.color.lightBlack,
    fontWeight: '100',
  },
});
