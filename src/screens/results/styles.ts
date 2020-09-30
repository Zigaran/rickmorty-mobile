import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styled';
import { Container as _Container } from '../../components';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.purple,
}));

export const styles = StyleSheet.create({});
