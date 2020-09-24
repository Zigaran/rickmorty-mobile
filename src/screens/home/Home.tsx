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
        <Icon name="menu" size={33} color={theme.color.creamWhite} />
      </TouchableOpacity>
      {/* <View>
        <Text>HOME SCREEN</Text>
        <Button
          onPress={() => navigation.navigate('Results')}
          color="black"
          title="GO TO RESULTS"
        />
      </View> */}
    </Container>
  );
};

export default Home;
