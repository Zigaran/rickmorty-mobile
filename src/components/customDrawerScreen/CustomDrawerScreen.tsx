import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image } from 'react-native';
import { styles } from './styles';
import DrawerItem from '../drawerItem';
import Switcher from '../switcher';
import icons from '../../icons';
import FooterButton from '../footerButton';

const backgroundDrawer = require('../../images/background.png');
const logo = require('../../images/rick_morty_01.png');
const puzzleUrl = 'https://thepuzzle.digital/';

const CustomDrawerScreen = () => {
  const isEnabled = true;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundDrawer} style={styles.backgroundDrawer}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerText}>{`Rick & Morty Filter`}</Text>
            <View style={styles.headerUnderline} />
          </View>
          <DrawerItem title="Characters" icon={icons.character} />
          <DrawerItem title="Locations" icon={icons.location} />
          <DrawerItem title="Episodes" icon={icons.episode} />

          <View style={styles.switcher}>
            <Text style={styles.text}>Search By</Text>
            <View style={styles.underline} />
            <Switcher />
          </View>
          <View style={styles.space} />
          <FooterButton title="Puzzle Challenge" url={puzzleUrl} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomDrawerScreen;
