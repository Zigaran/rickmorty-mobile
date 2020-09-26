import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  icon: object;
  title: string;
}

const DrawerItem = ({ icon, title }: Props) => {
  return (
    <TouchableOpacity style={styles.drawerItem}>
      <View style={styles.itemRow}>
        <View style={styles.iconBackground}>{icon}</View>
        <Text style={styles.drawerText}>{title}</Text>
        <View style={styles.dotActive} />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;
