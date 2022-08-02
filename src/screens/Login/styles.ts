import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const Header = styled.View`
    width: 100%;
    height: 80%;

    background-color: ${({ theme }) => theme.colors.backgroundWhite};

    justify-content: flex-end;
    align-items: center;
`;

export const TitleWrapper = styled.View`
    align-items: center;
`;


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.Titles};
    font-size: ${RFValue(25)}px;

    text-align: center;
    margin-top: 25px;
`;

export const SignInTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.Titles};
    font-size: ${RFValue(16)}px;

    text-align: center;
    
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;

    background-color: ${({ theme }) => theme.colors.primaryBlue};
`;

export const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(3)}px;
    padding: 0 32px;

    justify-content: space-between;
`;
