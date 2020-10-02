import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  icon: object;
  title: string;
  onPress: () => void;
  active: boolean;
}

const DrawerItem = ({ icon, title, onPress, active }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <View style={styles.itemRow}>
        <View style={styles.iconBackground}>{icon}</View>
        <Text style={styles.drawerText}>{title}</Text>
        {active ? <View style={styles.dotActive} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;
