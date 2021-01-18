import React from 'react';
import { Linking, Modal, TouchableOpacity } from 'react-native';
import {
  Background,
  Container,
  ContentContainer,
  Header,
  ArticleContainer,
  Title,
  Abstract,
  ArticleURL
} from './styles';

export default function ArticleModal({ modalVisible, setModalVisible, article }) {

  function closeModal () {
    setModalVisible(false);
  }

  function openURL () {
    if (Linking.canOpenURL(article.url)) {
      Linking.openURL(article.url);
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <Container>
        <Background onPress={closeModal} />
        <ContentContainer>
          <Header>
            <Title>{article && article.title ? article.title : ''}</Title>
          </Header>
          <ArticleContainer>
            <Abstract>{article && article.abstract ? article.abstract : ''}</Abstract>
            {article && article.url &&
              <TouchableOpacity onPress={openURL}>
                <ArticleURL>{article.url}</ArticleURL>
              </TouchableOpacity>
            }
          </ArticleContainer>
        </ContentContainer>
      </Container>
    </Modal>
  );
}
