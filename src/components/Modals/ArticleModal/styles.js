import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content: center;
`;

export const ContentContainer = styled.View`
    margin: 24px;
    align-items: center;
    border-radius: 8px;
    z-index: 10;
    background-color: white;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ArticleContainer = styled.View`
    width: 100%;
`;

export const Background = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
    z-index: -2;
`;

export const Header = styled.View`
    height: 60px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Abstract = styled.Text`
    font-size: 14px;
`;

export const ArticleURL = styled.Text`
    font-size: 14px;
    text-decoration: underline;
    color: blue;
    margin-top: 20px;
`;