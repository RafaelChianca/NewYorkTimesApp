import styled from 'styled-components/native';

export const ArticleContainer = styled.TouchableOpacity`
    width: 100%;
    background-color: blue;
    min-height: 280px;
    margin-bottom: 20px;
    padding: 10px;
`;

export const ArticleImage = styled.View`
    width: 100%;
    height: 180px;
    background-color: pink;
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const Headline = styled.Text`
    font-size: 14px;
`;