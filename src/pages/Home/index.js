import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listTechnologyRequested } from '../../store/actions/news';
import { Container } from './styles';

export default function Home() {

    const dispatch = useDispatch();
    const tecnology = useSelector(state => state.news.tecnology);
    const [techNews, setTechNews] = useState([]);

    // useEffect(() => {
    //     dispatch(listTechnologyRequested(1, 20));
    // }, [])

    // useEffect(() => {
    //     setTechNews(tecnology);
    // }, [tecnology])

    return (
        <Container>
            <Text>Hello World</Text>
            {techNews && techNews.length > 0 &&
                <Text>{techNews[0]}</Text>
            }
        </Container>
    );
}
