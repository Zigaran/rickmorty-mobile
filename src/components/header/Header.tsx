import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import icons from '../../icons';
import { styles } from './styles';

interface Props {
  title: string;
  onPressBack: () => void;
}

const Header = ({ title, onPressBack }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPressBack} style={styles.goBack}>
        {icons.back}
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <View style={styles.fillSpace} />
    </SafeAreaView>
  );
};

export default Header;
