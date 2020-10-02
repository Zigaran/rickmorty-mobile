import React from 'react';
import { Modal, Text, FlatList, View } from 'react-native';
import { Container, CharInfo, ModalContent, styles } from './styles';

type residents = {
  name: string;
  id: string;
};

interface Props {
  active: boolean;
  name: string;
  type: string;
  dimension: string;
  residents: Array<residents>;
  onDismiss: () => void;
}

const LocatModal = ({ active, name, type, dimension, residents, onDismiss }: Props) => {
  let firstFiveResidents: Array<residents>;

  residents
    ? (firstFiveResidents = residents.slice(0, 5))
    : (firstFiveResidents = [{ id: '', name: '' }]);

  // actualObject.characters
  //   ? (firstFiveCharacters = actualObject.characters.slice(0, 5))
  //   : (firstFiveCharacters = false);

  return (
    <Modal transparent animated visible={active}>
      <Container onPress={onDismiss}>
        <ModalContent>
          <CharInfo>
            <Text style={styles.title}>
              Location: <Text style={styles.info}>{name}</Text>
            </Text>
            <Text style={styles.title}>
              Dimension: <Text style={styles.info}>{dimension}</Text>
            </Text>
            <Text style={styles.title}>
              Type: <Text style={styles.info}>{type}</Text>
            </Text>
            {firstFiveResidents[0].name ? (
              <View style={styles.residentList}>
                <Text style={styles.titleList}>FIRST FIVE RESIDENTS</Text>
                <FlatList
                  data={firstFiveResidents}
                  renderItem={({ item }) => <Text style={styles.info}>• {item.name}</Text>}
                  keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <Text style={styles.onNoData}>NO RESIDENTS ENCOUNTERED</Text>
            )}
          </CharInfo>
        </ModalContent>
      </Container>
    </Modal>
  );
};

export default LocatModal;
