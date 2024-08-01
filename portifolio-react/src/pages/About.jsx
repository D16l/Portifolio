import React  from 'react';
import TitleBackground from '../components/TitleBackground';
import { useTranslation } from 'react-i18next';
import StyledBody from '../components/StyledBody';
import Separator from '../components/Separator'


function About() {
    const {t} = useTranslation();
    return (
        <>
            <TitleBackground>
                <h1 className='animate__fadeInDown'>{t('about.header')}</h1>
            </TitleBackground>
            <StyledBody $baseHeight={800} opacity="1" className='animate__fadeInDown'>
                <div style={{display:'flex', padding:'1.25rem' }}>
                    <div style={{paddingRight:'1rem' }}>
                        <h3>{t('about.hello')}</h3>
                        <Separator></Separator>
                        <p>{t('about.helloP')}</p>
                        <p>{t('about.helloP2')}</p>
                    </div>
                    <img src='img/fotoDarkMode.jpeg' width="350px"></img>
                </div>
                <div>

                </div>
            </StyledBody>
            
        </>
    )
}

export default About;