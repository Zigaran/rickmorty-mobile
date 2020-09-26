import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NameIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TypeIcon from 'react-native-vector-icons/Fontisto';
import _LocationIcon from 'react-native-vector-icons/Ionicons';
import { theme } from '../styled';

const character = <Icon name="user-astronaut" size={21} color={theme.color.creamWhite} />;
const location = <_LocationIcon name="rocket" size={21} color={theme.color.creamWhite} />;
const episode = <Icon name="book" size={18} color={theme.color.creamWhite} />;
const name = <NameIcon name="human" size={21} color={theme.color.creamWhite} />;
const type = <TypeIcon name="electronjs" size={21} color={theme.color.creamWhite} />;

const icons = {
  character,
  location,
  episode,
  name,
  type,
};

export default icons;
