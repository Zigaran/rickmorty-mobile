import { StyleSheet, View } from 'react-native';
import { theme } from '../../styled';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },

  drawerItem: {
    backgroundColor: theme.color.purple,
    borderBottomColor: theme.color.lightGray,
    borderBottomWidth: 1,
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
    backgroundColor: theme.color.gray,
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

  backgroundDrawer: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover',
    opacity: 0.2,
  },
});
