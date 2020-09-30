import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const img = { uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' };

interface Props {
  name: string;
  image: string;
}

const CharItem = ({ name, image }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.name}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharItem;
