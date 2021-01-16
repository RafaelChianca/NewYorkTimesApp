import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: red;
    padding: 20px;
`;

export const Header = styled.Text`
    font-weight: bold;
    font-size: 30px;
    align-self: center;
    margin-bottom: 20px;
`;