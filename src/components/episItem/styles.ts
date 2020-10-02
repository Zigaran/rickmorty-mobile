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

  infoContent: {
    width: '95%',
    height: '100%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },

  nameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.lightBlack,
    paddingBottom: 4,
    paddingTop: 4,
    lineHeight: 17,
    textShadowColor: theme.color.darkOrange,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  dimensionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.color.lightBlack,
    paddingBottom: 4,
    paddingTop: 4,
    lineHeight: 17,
  },

  text: {
    fontSize: 18,
    color: theme.color.lightBlack,
    fontWeight: '100',
    textShadowColor: theme.color.green,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 0,
  },
});
