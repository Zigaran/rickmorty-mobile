import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image } from 'react-native';
import { styles } from './styles';
import DrawerItem from '../drawerItem';
import Switcher from '../switcher';
import icons from '../../icons';
import FooterButton from '../footerButton';
import { connect } from 'react-redux';
import {
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
} from '../../redux/actions/filter';

interface Props {
  charFilterStatus: boolean;
  locationsFilterStatus: boolean;
  episodesFilterStatus: boolean;
  charFilterActive: () => void;
  locationsFilterActive: () => void;
  episodesFilterActive: () => void;
}

const backgroundDrawer = require('../../images/background.png');
const logo = require('../../images/rick_morty_01.png');
const puzzleUrl = 'https://thepuzzle.digital/';

const CustomDrawerScreen = ({
  charFilterStatus,
  locationsFilterStatus,
  episodesFilterStatus,
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
}: Props) => {
  const isEnabled = true;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundDrawer} style={styles.backgroundDrawer}>
        {/* ----------CONTENT---------- */}
        <View style={styles.content}>
          {/* ----------HEADER---------- */}
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerText}>{`Rick & Morty Filter`}</Text>
            <View style={styles.headerUnderline} />
          </View>
          {/* ----------END-HEADER---------- */}

          {/* ----------FILTER-ENTITIES---------- */}
          <DrawerItem
            active={charFilterStatus}
            onPress={charFilterActive}
            title="Characters"
            icon={icons.character}
          />
          <DrawerItem
            active={locationsFilterStatus}
            onPress={locationsFilterActive}
            title="Locations"
            icon={icons.location}
          />
          <DrawerItem
            active={episodesFilterStatus}
            onPress={episodesFilterActive}
            title="Episodes"
            icon={icons.episode}
          />
          {/* ----------END-FILTER-ENTITIES---------- */}

          {/* ----------BY-NAME-OR-TYPE-FILTER---------- */}
          <View style={styles.switcher}>
            <Text style={styles.text}>Search By</Text>
            <View style={styles.underline} />
            <Switcher />
          </View>
          {/* ----------END-BY-NAME-OR-TYPE-FILTER---------- */}

          {/* ----------FOOTER---------- */}
          <View style={styles.space} />
          <FooterButton title="Puzzle Challenge" url={puzzleUrl} />
        </View>
        {/* ----------END-FOOTER---------- */}
      </ImageBackground>
    </SafeAreaView>
  );
};

function mapState(state: any) {
  return {
    charFilterStatus: state.filter.charsMenuItem,
    locationsFilterStatus: state.filter.locationsMenuItem,
    episodesFilterStatus: state.filter.episodesMenuItem,
  };
}

export default connect(mapState, {
  charFilterActive,
  locationsFilterActive,
  episodesFilterActive,
})(CustomDrawerScreen);
