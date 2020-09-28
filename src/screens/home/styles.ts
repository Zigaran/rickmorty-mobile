import styled from 'styled-components/native';
import { Container as _Container } from '../../components';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../styled';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.purple,
  flex: 1,
}));

export const Content = styled(View)(() => ({
  height: '80%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const styles = StyleSheet.create({
  menuButton: {
    alignItems: 'center',
    backgroundColor: theme.color.gray,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
    margin: 10,
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
});
