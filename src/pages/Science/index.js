import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../../components/Lists/NewsList';
import { listScienceRequested } from '../../store/actions/news';
import { Container, Header } from './styles';

export default function Science() {

    const dispatch = useDispatch();
    const science = useSelector(state => state.news.science);
    const [scienceNews, setScienceNews] = useState([]);

    useEffect(() => {
        dispatch(listScienceRequested(1, 20));
    }, [])

    useEffect(() => {
        setScienceNews(science);
    }, [science])

    return (
        <Container>
            <Header>Science</Header>
            <ArticleList articles={scienceNews} />
        </Container>
    );
}
