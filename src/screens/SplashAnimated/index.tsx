import React, { useEffect } from 'react';

import IeqLogoPreto from '../../assets/IeqLogoPreto.svg';
import Quadrangular from '../../assets/QUADRANGULARname.svg';


import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';


import { Container } from './styles';

interface SplashAnimatedProps{
    handleCallAppRoutes: () => void;
}

export function SplashAnimated({ handleCallAppRoutes }: SplashAnimatedProps){
    const splashAnimation = useSharedValue(0);

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 50], [0, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -100],
                        Extrapolate.CLAMP    
                    )
                }
            ],
        }
    });

    const wordFoursquareStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 100],
                        [0, +80],
                        Extrapolate.CLAMP    
                    )
                }
            ]
        }
    });

    function startApp(){
        handleCallAppRoutes();
    };
    
    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 1500 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        
        )
    }, []);

        return(
        <Container>
            <Animated.View  style={[brandStyle, {position: "absolute"}]}>
                <IeqLogoPreto width={80} height={60}/>
            </Animated.View>

            <Animated.View style={[wordFoursquareStyle, {position: "absolute"}]}>
                <Quadrangular width={250} height={70}/>
            </Animated.View>
        </Container>
    )
}