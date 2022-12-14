import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;

    background-color: ${({ theme }) => theme.colors.primaryBlue};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;

    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundWhite};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundWhite};

    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Body = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;