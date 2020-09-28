import React, { useCallback } from 'react';
import { Alert, Linking, View, Text } from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  url: string;
  title: string;
}

const footerButton = ({ url, title }: Props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handlePress} style={styles.puzzleChallenge}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default footerButton;
