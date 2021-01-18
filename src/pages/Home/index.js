import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from '../../components/Lists/NewsList';
import { listTechnologyRequested } from '../../store/actions/news';
import { Container, Header } from './styles';

export default function Home() {

    const dispatch = useDispatch();
    const technology = useSelector(state => state.news.technology);
    const [techNews, setTechNews] = useState([]);

    useEffect(() => {
        requestTechnology();
    }, [])

    useEffect(() => {
        if (technology) {
            setTechNews(technology);
        }
    }, [technology])

    function requestTechnology () {
        dispatch(listTechnologyRequested());
    }

    return (
        <Container>
            <Header>Technology</Header>
            <ArticleList reloadFunction={requestTechnology} articles={techNews} />
        </Container>
    );
}
