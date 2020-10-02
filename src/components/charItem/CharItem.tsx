import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  name: string;
  image: string;
  onPress: () => void;
}

const CharItem = ({ name, image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.name}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharItem;
