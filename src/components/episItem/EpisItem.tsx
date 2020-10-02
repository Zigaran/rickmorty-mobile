import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  name: string;
  episode: string;
  onPress: () => void;
}

const EpisItem = ({ name, episode, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.infoContent}>
        <Text style={styles.nameTitle}>
          • NAME: <Text style={styles.text}>{name}</Text>
        </Text>
        <Text style={styles.dimensionTitle}>
          • Episode: <Text style={styles.text}>{episode}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisItem;
