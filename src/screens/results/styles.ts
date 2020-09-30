import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styled';
import { Container as _Container } from '../../components';

// export const Container = styled(View)(() => ({
//   backgroundColor: theme.color.creamWhite,
//   flexDirection: 'column',
// }));

export const Content = styled(View)(() => ({
  flex: 1,
  alignItems: 'center',
}));

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.creamWhite,
    flexDirection: 'column',
  },

  itemsList: {
    width: '100%',
  },

  listContent: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
