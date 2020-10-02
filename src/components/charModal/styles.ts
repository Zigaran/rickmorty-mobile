import { StyleSheet, TouchableOpacity, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styled';

export const Container = styled(TouchableOpacity)({
  justifyContent: 'center',
  backgroundColor: theme.color.lightBlack,
  flex: 1,
});

export const ModalContent = styled(SafeAreaView)({
  backgroundColor: theme.color.transparentBlack,
  borderRadius: 10,
  width: '85%',
  height: '85%',
  alignSelf: 'center',
});

export const CharInfo = styled(View)({
  justifyContent: 'center',
  flex: 1,
  paddingLeft: '25%',
});

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontSize: 18,
    color: theme.color.lightBlack,
    fontWeight: 'bold',
    lineHeight: 40,
  },

  info: {
    fontSize: 18,
    color: theme.color.info,
    fontWeight: '100',
  },
});
