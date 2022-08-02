import React from 'react';
import { Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

import {    
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Body,
} from './styles';

export function Account(){

    const { user, signOut } = useAuth();

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: user.photo }}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>{user.name}</UserName>
                        </User>

                    </UserInfo>

                </UserWrapper>
            </Header>

            <Body>
                <Text style={{fontSize: 20}}>Tela de avisos</Text>
            </Body>

        </Container>
    )
}