import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const ArticleContainer = styled.TouchableOpacity`
    width: 100%;
    min-height: 280px;
    padding: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom-width: 2px;
    border-color: lightgray;
    background-color: white;
`;

export const ArticleImage = styled(FastImage)`
    width: 100%;
    height: 180px;
    background-color: lightgray;
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Abstract = styled.Text`
    font-size: 14px;
`;