import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import ArticleListItem from './ArticleListItem';
import { ButtonText, ReloadButton } from './styles';

export default function ArticleList({ articles, reloadFunction }) {

  const reloadList = useCallback(() => {
    if (reloadFunction) {
      reloadFunction();
    }
  }, [reloadFunction]);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <ArticleListItem article={item} />}
      keyExtractor={(item) => item.created_date}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <ReloadButton onPress={reloadList}>
          <ButtonText>Click to reload</ButtonText>
        </ReloadButton>
      }
    />
  );
}
