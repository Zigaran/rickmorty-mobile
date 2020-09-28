import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 250,
    margin: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.color.creamWhite,
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: '100%',
  },

  textInput: {
    marginTop: 3,
    fontSize: 16,
    height: '100%',
    width: '75%',
    color: theme.color.creamWhite,
  },
});
