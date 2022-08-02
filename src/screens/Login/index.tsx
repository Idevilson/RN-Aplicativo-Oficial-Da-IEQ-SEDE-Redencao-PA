import React, { useState } from 'react';
import { Alert } from 'react-native';
import { SignInSocialButton } from '../../components/Form/SignInSocialButton';
import { RFValue } from 'react-native-responsive-fontsize';

import IeqLogo from '../../assets/ieqlogo.svg'
import GoogleSvg from '../../assets/google.svg'

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';

import { useAuth } from '../../hooks/auth';

export function SignIn(){
    const [isLoading, setIsLoading] = useState(false);

    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            console.log("Pressed");
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar à sua conta Google');
            setIsLoading(false);
        }
    }

    return(
       <Container>
           <Header>
               <TitleWrapper>
                <IeqLogo 
                      width={RFValue(195)}
                      height={RFValue(195)}
                />
                <Title>
                    IEQ-SEDE{'\n'}
                    REDENÇÃO-PA{'\n'}
                    CAMPO-157
                </Title>
                <SignInTitle>
                    Faça seu login com{'\n'}
                    uma das contas abaixo
                </SignInTitle>   
               </TitleWrapper>
           </Header>
           <Footer>
               <FooterWrapper>
                   <SignInSocialButton 
                        title="Entrar com o Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                   />
                   </FooterWrapper>
           </Footer>
        </Container>
    )
}