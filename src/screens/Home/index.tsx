import React from 'react';

import ChurchSvg from '../../assets/church.svg';
import {
    Container,
    Name,
    ButtonsContainer,
    HomeButton,
} from './styles';

export function Home(){
    return(
        <Container>
            <Name>Home</Name>
            <ButtonsContainer>
                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>

                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>

                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>

                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>

                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>

                <HomeButton onPress={() => console.log("funcionando")}>
                    <ChurchSvg width={100} height={100} fill={"#fff"}/>
                </HomeButton>
            </ButtonsContainer>
        </Container>
    );
};