import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { CharModal, Header, CharItem, PageButton } from '../../components';
import { Content, styles } from './styles';
import { Navigation } from '../../navigation/navTypes';
import { connect } from 'react-redux';
import { getMeTheData } from '../../redux/actions/querys';

type objectSelected = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  image: string;
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

const Results = ({
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
    image: '',
    species: '',
    type: '',
    gender: '',
  });

  const onPressItem = (itemSelected: objectSelected) => {
    onPressObject({
      id: itemSelected.id,
      name: itemSelected.name,
      image: itemSelected.image,
      species: itemSelected.species,
      type: itemSelected.type,
      gender: itemSelected.gender,
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
      <Header title="CHARACTERS" onPressBack={() => navigation.goBack()} />
      <Content>
        <FlatList
          style={styles.itemsList}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listContent}>
              <CharItem name={item.name} image={item.image} onPress={() => onPressItem(item)} />
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
      <CharModal
        name={actualObject.name}
        type={actualObject.type}
        gender={actualObject.gender}
        species={actualObject.species}
        image={actualObject.image}
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

export default connect(mapState, { getMeTheData })(Results);
