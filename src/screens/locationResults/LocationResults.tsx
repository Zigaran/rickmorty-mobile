import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { LocatModal, Header, LocatItem, PageButton } from '../../components';
import { Content, styles } from './styles';
import { Navigation } from '../../navigation/navTypes';
import { connect } from 'react-redux';
import { getMeTheData } from '../../redux/actions/querys';

type residents = {
  name: string;
  id: string;
};

type objectSelected = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<residents>;
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

const LocationResults = ({
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
    type: '',
    dimension: '',
    residents: [{ name: '', id: '' }],
  });
  const onPressItem = (itemSelected: objectSelected) => {
    onPressObject({
      id: itemSelected.id,
      name: itemSelected.name,
      type: itemSelected.type,
      dimension: itemSelected.dimension,
      residents: itemSelected.residents,
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
      <Header title="LOCATIONS" onPressBack={() => navigation.goBack()} />
      <Content>
        <FlatList
          style={styles.itemsList}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.listContent}>
              <LocatItem
                name={item.name}
                dimension={item.dimension}
                onPress={() => onPressItem(item)}
              />
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
      <LocatModal
        name={actualObject.name}
        dimension={actualObject.dimension}
        residents={actualObject.residents}
        type={actualObject.type}
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

export default connect(mapState, { getMeTheData })(LocationResults);
