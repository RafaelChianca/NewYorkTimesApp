import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ArticleListItem from './ArticleListItem';

export default function ArticleList ({ articles }) {

    return (
        <FlatList
            data={articles}
            renderItem={({ item }) =>
                <ArticleListItem article={item} />
            }
            keyExtractor={(item) => item.created_date}
        />
    );
}
