import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';
import { styles } from './styles';
import icons from '../../icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Switcher = () => {
  const [byType, onChange] = useState(true);
  return (
    <TouchableOpacity onPress={() => onChange(!byType)} style={styles.switcher}>
      <View style={styles.itemRow}>
        <View style={styles.iconBackground}>{byType ? icons.type : icons.name}</View>
        {byType ? (
          <Text style={styles.switcherText}>Type</Text>
        ) : (
          <Text style={styles.switcherText}>Name</Text>
        )}
        <Switch
          trackColor={{ false: '#2fff00', true: '#9000ff' }}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {}}
          value={byType}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Switcher;
