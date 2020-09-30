import React from 'react';
import { Text, View } from 'react-native';
import { Container, TabsContainer, TabButton, styles } from './styles';

interface Props {
  leftTabText: string;
  rightTabText: string;
  leftTabActive: boolean;
  rightTabActive: boolean;
  onPressRightTab: () => void;
  onPressLeftTab: () => void;
}

const PageButton = ({
  leftTabText,
  rightTabText,
  leftTabActive,
  rightTabActive,
  onPressRightTab,
  onPressLeftTab,
}: Props) => (
  <Container>
    <TabsContainer>
      <TabButton onPress={onPressLeftTab}>
        <Text style={[(leftTabActive && styles.selectedTab) || styles.text]}>{leftTabText}</Text>
      </TabButton>
      <View style={styles.divisor} />
      <TabButton onPress={onPressRightTab}>
        <Text style={[(rightTabActive && styles.selectedTab) || styles.text]}>{rightTabText}</Text>
      </TabButton>
    </TabsContainer>
  </Container>
);

export default PageButton;
