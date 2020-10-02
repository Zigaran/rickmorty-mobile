import React, { useState } from 'react';
import { TextInput, View, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { styles } from './styles';
import icons from '../../icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../styled';
import { connect } from 'react-redux';
import { getInput, clearData } from '../../redux/actions/querys';

export type inputTextType = NativeSyntheticEvent<TextInputChangeEventData>;

interface Props {
  inputValue?: string;
  getInput: (p: string) => void;
  clearData: () => void;
}

const SearchInput = ({ inputValue, getInput, clearData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icons.search}</View>
      <TextInput
        placeholder="Search something..."
        placeholderTextColor={theme.color.lightGray}
        value={inputValue}
        onChangeText={(txt) => getInput(txt)}
        style={styles.textInput}
      />
      {inputValue ? (
        <TouchableOpacity onPress={() => clearData()} style={styles.icon}>
          {icons.close}
        </TouchableOpacity>
      ) : (
        <View style={styles.fillSpace} />
      )}
    </View>
  );
};

function mapState(state: any) {
  return {
    inputValue: state.data.input,
  };
}

export default connect(mapState, { getInput, clearData })(SearchInput);
