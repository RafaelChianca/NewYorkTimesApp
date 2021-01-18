import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 20px;
    background-color: white;
`;

export const Header = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
`;