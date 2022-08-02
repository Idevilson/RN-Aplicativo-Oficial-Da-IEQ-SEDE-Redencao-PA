import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text``;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 20px;
`;

export const HomeButton = styled(RectButton)`
    margin: 20px;
    background-color: #523;
`;

export const TextHomeButton = styled.Text`
    
`;