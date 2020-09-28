import React, { useState } from 'react';
import { TextInput, View, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { styles } from './styles';
import icons from '../../icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../styled';

export type inputTextType = NativeSyntheticEvent<TextInputChangeEventData>;

const SearchInput = () => {
  const [value, changeValue] = useState('');

  const onChange = (inputValue: inputTextType): void => {
    const textValue = inputValue.nativeEvent.text;
    changeValue(textValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icons.search}</View>
      <TextInput
        placeholder="Search something..."
        placeholderTextColor={theme.color.lightGray}
        onChange={onChange}
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.icon}>{icons.close}</TouchableOpacity>
    </View>
  );
};

export default SearchInput;
