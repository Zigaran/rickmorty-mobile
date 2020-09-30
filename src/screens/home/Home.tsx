import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Navigation } from '../../navigation/navTypes';
import { Container, Content, styles } from './styles';
import { theme } from '../../styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchButton, SearchInput } from '../../components';

interface Props {
  navigation: Navigation;
}

const homeLogo = require('../../images/rick_morty_01.png');

const Home = ({ navigation }: Props) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Container>
      <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
        <Icon name="menu" size={28} color={theme.color.creamWhite} />
      </TouchableOpacity>

      <Content>
        <Image source={homeLogo} style={styles.logo} />
        <SearchInput />
        <SearchButton title="Search" onPress={() => {}} />
      </Content>
    </Container>
  );
};

export default Home;
