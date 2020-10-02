import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  name: string;
  dimension: string;
  onPress: () => void;
}

const LocatItem = ({ name, dimension, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.infoContent}>
        <Text style={styles.nameTitle}>
          • LOCATION: <Text style={styles.text}>{name}</Text>
        </Text>
        <Text style={styles.dimensionTitle}>
          • Dimension: <Text style={styles.text}>{dimension}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocatItem;
