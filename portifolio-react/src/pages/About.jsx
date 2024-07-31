import React  from 'react';
import TitleBackground from '../components/TitleBackground';
import { useTranslation } from 'react-i18next';
import StyledBody from '../components/StyledBody';


function About() {
    const {t} = useTranslation();
    return (
        <>
            <TitleBackground>
                <h1 className='animate__fadeInDown'>{t('about.header')}</h1>
            </TitleBackground>
            <StyledBody $baseHeight={800} opacity="1" className='animate__fadeInDown'>
            </StyledBody>
            
        </>
    )
}

export default About;