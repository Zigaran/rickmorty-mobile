import styled from 'styled-components/native';
import { theme } from '../../styled';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export const Container = styled(View)({
  backgroundColor: theme.color.lightGray,
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TabsContainer = styled(View)({
  backgroundColor: theme.color.lightGray,
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '90%',
  alignSelf: 'center',
});

export const TabButton = styled(TouchableOpacity)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: 45,
  width: '45%',
}));

export const styles = StyleSheet.create({
  divisor: {
    width: 1,
    height: 30,
    backgroundColor: theme.color.creamWhite,
    alignSelf: 'center',
  },
  selectedTab: {
    color: theme.color.creamWhite,
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text: {
    color: theme.color.gray,
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
