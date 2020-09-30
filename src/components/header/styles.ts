import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: theme.color.lightGray,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  goBack: {
    alignItems: 'center',
    backgroundColor: theme.color.lightGray,
    borderRadius: 20,
    height: 35,
    justifyContent: 'center',
    width: 35,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },

  text: {
    color: theme.color.creamWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },

  fillSpace: {
    width: 45,
    height: '100%',
  },
});
