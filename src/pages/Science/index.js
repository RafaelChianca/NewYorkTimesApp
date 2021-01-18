import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../../components/Lists/ArticleList';
import { listScienceRequested } from '../../store/actions/news';
import { Container, Header } from './styles';

export default function Science() {

    const dispatch = useDispatch();
    const science = useSelector(state => state.news.science);
    const [scienceNews, setScienceNews] = useState([]);

    useEffect(() => {
        requestScience();
    }, [])

    useEffect(() => {
        setScienceNews(science);
    }, [science])

    function requestScience () {
        dispatch(listScienceRequested());
    }

    return (
        <Container>
            <Header>Science</Header>
            <ArticleList reloadFunction={requestScience} articles={scienceNews} />
        </Container>
    );
}
