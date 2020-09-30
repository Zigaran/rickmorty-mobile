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

  const clearInput = () => {
    changeValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icons.search}</View>
      <TextInput
        placeholder="Search something..."
        placeholderTextColor={theme.color.lightGray}
        value={value}
        onChange={onChange}
        style={styles.textInput}
      />
      {value ? (
        <TouchableOpacity onPress={clearInput} style={styles.icon}>
          {icons.close}
        </TouchableOpacity>
      ) : (
        <View style={styles.fillSpace} />
      )}
    </View>
  );
};

export default SearchInput;
