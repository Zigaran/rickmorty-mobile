import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { EpisModal, Header, EpisItem, PageButton } from '../../components';
import { Content, styles } from './styles';
import { Navigation } from '../../navigation/navTypes';
import { connect } from 'react-redux';
import { getMeTheData } from '../../redux/actions/querys';

type characters = {
  name: string;
  id: string;
};

type objectSelected = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<characters>;
};

interface Props {
  navigation: Navigation;
  data: Array<objectSelected>;
  prev: number;
  next: number;
  prevBoolean: boolean;
  nextBoolean: boolean;
  getMeTheData: (p: number) => void;
}

const EpisResults = ({
  navigation,
  data,
  prev,
  next,
  prevBoolean,
  nextBoolean,
  getMeTheData,
}: Props) => {
  const [modalValue, onPressModal] = useState(false);
  const [actualObject, onPressObject] = useState({
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [{ name: '', id: '' }],
  });
  const onPressItem = (itemSelected: objectSelected) => {
    onPressObject({
      id: itemSelected.id,
      name: itemSelected.name,
      air_date: itemSelected.air_date,
      episode: itemSelected.episode,
      characters: itemSelected.characters,
    });
    onPressModal(true);
  };

  const onPressPrev = () => {
    prev ? getMeTheData(prev) : null;
  };

  const onPressNext = () => {
    next ? getMeTheData(next) : null;
  };

  return (
    <View style={styles.container}>
      <Header title="EPISODES" onPressBack={() => navigation.goBack()} />
      <Content>
        <FlatList
          style={styles.itemsList}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listContent}>
              <EpisItem name={item.name} episode={item.episode} onPress={() => onPressItem(item)} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Content>
      <PageButton
        leftTabActive={prevBoolean}
        rightTabActive={nextBoolean}
        onPressLeftTab={onPressPrev}
        onPressRightTab={onPressNext}
        leftTabText="Prev"
        rightTabText="Next"
      />
      <EpisModal
        name={actualObject.name}
        air_date={actualObject.air_date}
        characters={actualObject.characters}
        episode={actualObject.episode}
        active={modalValue}
        onDismiss={() => onPressModal(false)}
      />
    </View>
  );
};

function mapState(state: any) {
  return {
    data: state.data.data,
    prev: state.data.prev,
    next: state.data.next,
    prevBoolean: state.data.prevButton,
    nextBoolean: state.data.nextButton,
  };
}

export default connect(mapState, { getMeTheData })(EpisResults);
