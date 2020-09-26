import React from 'react';
import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { Navigation } from '../../navigation/navTypes';
import { Container, styles } from './styles';
import { theme } from '../../styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: Navigation;
}

const Home = ({ navigation }: Props) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Container>
      <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
        <Icon name="menu" size={28} color={theme.color.creamWhite} />
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
