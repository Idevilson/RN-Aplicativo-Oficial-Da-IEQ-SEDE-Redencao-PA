import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
`;

export const DrawerHeader = styled.View`
    margin-top: -5px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};

    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;

    border-radius: ${RFValue(40)}px;
`;

export const User = styled.View`
    align-items: center;
`; 

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundWhite};

    margin-top: 10px;
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserEmail = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundWhite};

    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DrawerScreenContainer = styled.View`
    flex: 1;
    margin-top: 30px;
`;

export const LogoutButton = styled(BorderlessButton)`
    width: 100px;

    flex-direction: row;

    align-items: center;
    justify-content: center;
    align-self: center;

    margin-bottom: 50px;
`;

export const LogoutText = styled.Text`
    color: ${({ theme }) => theme.colors.Titles};

    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 5px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${RFValue(24)}px;
    margin-left: 5px;
`;
