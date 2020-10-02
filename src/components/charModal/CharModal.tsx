import React from 'react';
import { Modal, Image, Text } from 'react-native';
import { Container, CharInfo, ModalContent, styles } from './styles';

interface Props {
  active: boolean;
  name: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  onDismiss: () => void;
}

const CharModal = ({ active, name, species, type, gender, image, onDismiss }: Props) => {
  return (
    <Modal transparent animated visible={active}>
      <Container onPress={onDismiss}>
        <ModalContent>
          <Image source={{ uri: image }} style={styles.image} />
          <CharInfo>
            <Text style={styles.title}>
              Name: <Text style={styles.info}>{name}</Text>
            </Text>
            <Text style={styles.title}>
              Type: <Text style={styles.info}>{type ? type : 'unknown'}</Text>
            </Text>
            <Text style={styles.title}>
              Gender: <Text style={styles.info}>{gender}</Text>
            </Text>
            <Text style={styles.title}>
              Species: <Text style={styles.info}>{species}</Text>
            </Text>
          </CharInfo>
        </ModalContent>
      </Container>
    </Modal>
  );
};

export default CharModal;
