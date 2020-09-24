import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, ImageBackground, View } from 'react-native';
import { styles } from './styles';
import CharIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../styled';

const backgroundDrawer = require('../../images/background.jpg');

const CustomDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableHighlight
          onPress={() => console.log('Characters pressed')}
          style={styles.drawerItem}
        >
          <View style={styles.itemRow}>
            <View style={styles.iconBackground}>
              <CharIcon name="menu" size={25} color={theme.color.creamWhite} />
            </View>
            <Text style={styles.drawerText}>CHARACTERS</Text>
            <View style={styles.dotActive} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.drawerItem}>
          <View style={styles.itemRow}>
            <Text style={styles.drawerText}>LOCATIONS</Text>
            <View style={styles.dotActive} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.drawerItem}>
          <View style={styles.itemRow}>
            <Text style={styles.drawerText}>EPISODES</Text>
            <View style={styles.dotActive} />
          </View>
        </TouchableHighlight>
      </View>
      <ImageBackground source={backgroundDrawer} style={styles.backgroundDrawer} />
    </SafeAreaView>
  );
};

export default CustomDrawerScreen;
