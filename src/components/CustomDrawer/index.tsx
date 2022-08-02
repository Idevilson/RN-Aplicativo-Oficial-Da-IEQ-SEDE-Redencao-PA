import React from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { useAuth } from '../../hooks/auth';

import { 
    Container,
    DrawerHeader,
    User,
    Photo,
    DrawerScreenContainer,
    UserName,
    UserEmail,
    LogoutButton,
    LogoutText,
    Icon
} from './styles';


export function CustomDrawer(props){

    const { user, signOut } = useAuth();

    return(
        <Container>
            <DrawerContentScrollView
                {...props}
            >
                <DrawerHeader>
                    <User>
                        <Photo 
                            source={{ uri:  user.photo}}
                        />

                        <UserName>{user.name}</UserName>
                        <UserEmail>{user.email}</UserEmail>
                    </User>
                </DrawerHeader>

                <DrawerScreenContainer>
                    <DrawerItemList 
                        {...props}
                    />
                </DrawerScreenContainer>

            </DrawerContentScrollView>
            <LogoutButton onPress={signOut}>
                            <LogoutText>SAIR</LogoutText>
                            <Icon 
                                name="power"
                            />
            </LogoutButton>
        </Container>
    )
}