import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../../components/Lists/NewsList';
import { listTechnologyRequested } from '../../store/actions/news';
import { Container, Header } from './styles';

export default function Home() {

    const dispatch = useDispatch();
    const tecnology = useSelector(state => state.news.technology);
    const [techNews, setTechNews] = useState([]);

    useEffect(() => {
        dispatch(listTechnologyRequested(1, 20));
    }, [])

    useEffect(() => {
        setTechNews(tecnology);
        console.log('resposta do sagas', tecnology);
    }, [tecnology])

    return (
        <Container>
            <Header>Technology</Header>
            <ArticleList articles={techNews} />
        </Container>
    );
}
