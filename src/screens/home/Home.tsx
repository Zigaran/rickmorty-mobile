import React from 'react';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from '../../navigation/navTypes';
import { Container, Content, styles } from './styles';
import { theme } from '../../styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchButton, SearchInput } from '../../components';
import { connect } from 'react-redux';
import { clearData } from '../../redux/actions/querys';

interface Props {
  navigation: Navigation;
  charsActive: boolean;
  locationsActive: boolean;
  error: string;
  clearData: () => void;
}

const homeLogo = require('../../images/rick_morty_01.png');

const Home = ({ navigation, charsActive, locationsActive, error, clearData }: Props) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  const onSearchPress = () => {
    error
      ? Alert.alert('Sorry :(', 'not found', [{ text: 'Ok', onPress: clearData }])
      : charsActive
      ? navigation.navigate('CharResults')
      : locationsActive
      ? navigation.navigate('LocationResults')
      : navigation.navigate('EpisodesResults');
  };

  return (
    <Container>
      <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
        <Icon name="menu" size={28} color={theme.color.creamWhite} />
      </TouchableOpacity>

      <Content>
        <Image source={homeLogo} style={styles.logo} />
        <SearchInput />
        <SearchButton title="Search" onPress={onSearchPress} />
      </Content>
    </Container>
  );
};

function mapState(state: any) {
  return {
    charsActive: state.filter.charsMenuItem,
    locationsActive: state.filter.locationsMenuItem,
    error: state.data.error,
  };
}

export default connect(mapState, { clearData })(Home);
