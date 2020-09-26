import styled from 'styled-components/native';
import { Container as _Container } from '../../components';
import { StyleSheet } from 'react-native';
import { theme } from '../../styled';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.purple,
  flex: 1,
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
});
