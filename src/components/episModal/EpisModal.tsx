import React from 'react';
import { Modal, Text, FlatList, View } from 'react-native';
import { Container, CharInfo, ModalContent, styles } from './styles';

type characters = {
  name: string;
  id: string;
};

interface Props {
  active: boolean;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<characters>;
  onDismiss: () => void;
}

const EpisModal = ({ active, name, air_date, episode, characters, onDismiss }: Props) => {
  let firstFiveCharacters: Array<characters>;

  characters
    ? (firstFiveCharacters = characters.slice(0, 5))
    : (firstFiveCharacters = [{ id: '', name: '' }]);

  return (
    <Modal transparent animated visible={active}>
      <Container onPress={onDismiss}>
        <ModalContent>
          <CharInfo>
            <Text style={styles.title}>
              Name: <Text style={styles.info}>{name}</Text>
            </Text>
            <Text style={styles.title}>
              Release Date: <Text style={styles.info}>{air_date}</Text>
            </Text>
            <Text style={styles.title}>
              Episode: <Text style={styles.info}>{episode}</Text>
            </Text>
            {firstFiveCharacters[0].name ? (
              <View style={styles.residentList}>
                <Text style={styles.titleList}>FIRST FIVE CHARACTERS</Text>
                <FlatList
                  data={firstFiveCharacters}
                  renderItem={({ item }) => <Text style={styles.info}>• {item.name}</Text>}
                  keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <Text style={styles.onNoData}>NO CHARACTERS ENCOUNTERED</Text>
            )}
          </CharInfo>
        </ModalContent>
      </Container>
    </Modal>
  );
};

export default EpisModal;
