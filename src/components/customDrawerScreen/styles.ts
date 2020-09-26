import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    position: 'absolute',
    zIndex: 999,
    width: '100%',
  },

  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: theme.color.creamWhite,
    opacity: 0.75,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },

  headerUnderline: {
    alignSelf: 'center',
    width: '70%',
    height: 5,
    borderTopColor: theme.color.creamWhite,
    borderTopWidth: 1,
  },

  logo: {
    width: 104,
    height: 100,
    resizeMode: 'cover',
  },

  backgroundDrawer: {
    flex: 1,
    position: 'relative',
    zIndex: -1,
    resizeMode: 'cover',
    opacity: 0.4,
  },

  switcher: {
    marginTop: 30,
  },

  text: {
    color: theme.color.creamWhite,
    opacity: 0.75,
    alignSelf: 'center',
    fontSize: 15,
  },

  underline: {
    alignSelf: 'center',
    width: '40%',
    height: 5,
    borderTopColor: theme.color.creamWhite,
    borderTopWidth: 1,
  },

  space: {
    height: '32%',
    width: '100%',
  },

  footer: {
    alignSelf: 'center',
    height: 50,
    width: 200,
    backgroundColor: theme.color.green,
  },
});
