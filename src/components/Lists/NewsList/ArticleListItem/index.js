import React from 'react';
import { Text, View } from 'react-native';
import { ArticleContainer, ArticleImage, Title, Headline } from './styles';

export default function ArticleListItem ({ article }) {

    return (
        <ArticleContainer>
            <ArticleImage  />
            <Title numberOfLines={2}>{article.title}</Title>
            <Headline numberOfLines={3}>{article.abstract}</Headline>
        </ArticleContainer>
    );
}
