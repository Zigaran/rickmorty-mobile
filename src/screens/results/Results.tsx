import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Header, CharItem, PageButton } from '../../components';
import { Content, styles } from './styles';
import { characters } from '../../data/Data';
import { Navigation } from '../../navigation/navTypes';

const data = characters.results;

interface Props {
  navigation: Navigation;
}

const Results = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Header title="RESULTS" onPressBack={() => navigation.goBack()} />
      <Content>
        <FlatList
          style={styles.itemsList}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listContent}>
              <CharItem name={item.name} image={item.image} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Content>
      <PageButton
        leftTabActive={true}
        rightTabActive={true}
        onPressLeftTab={() => {}}
        onPressRightTab={() => {}}
        leftTabText="Prev"
        rightTabText="Next"
      />
    </View>
  );
};

export default Results;
