import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import ArticleModal from '../../../Modals/ArticleModal';
import { ArticleContainer, ArticleImage, Title, Abstract } from './styles';

export default function ArticleListItem ({ article }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            {article &&
                <>
                    <ArticleContainer onPress={() => {setModalVisible(true)}}>
                        <Title numberOfLines={2}>{article.title ? article.title : ''}</Title>
                        <ArticleImage
                            source={{
                                uri: article.multimedia && article.multimedia[0]
                                    ? article.multimedia[0].url
                                    : '',
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.normal,
                            }}
                            style={{ resizeMode: 'contain' }}
                        />
                        {/* <Title numberOfLines={2}>{article.title ? article.title : ''}</Title> */}
                        <Abstract>{article.abstract ? article.abstract : ''}</Abstract>
                    </ArticleContainer>
                    <ArticleModal article={article} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </>
            }
        </>
    );
}
