import React, { useEffect }  from 'react';
import TitleBackground from '../components/TitleBackground';
import { useTranslation } from 'react-i18next';
import StyledBody from '../components/StyledBody';
import Separator from '../components/Separator'


function About() {
    const {t} = useTranslation();
    useEffect(() => {

        const animationStart = () => {
        const animeCompleted = localStorage.getItem('animeCompleted') === 'true';
        const applyAnimationTitle = document.querySelector('[data-title]');
        const applyAnimationBody = document.querySelector('[data-body]');
    
        if (applyAnimationTitle && applyAnimationBody) {
        if (animeCompleted) {
            applyAnimationTitle.classList.remove('animate__fadeInDown');
            applyAnimationBody.classList.remove('animate__fadeInDown');
        } else {
            setTimeout(() => {
                applyAnimationTitle.classList.add('animate__fadeInDown');
            }, 0);

            setTimeout(() => {
                applyAnimationBody.classList.add('animate__fadeInDown');
            }, 1);

            localStorage.setItem('animeCompleted', 'true');
                }
            }
        };

        animationStart();
  }, []);
    return (
        <>
            <TitleBackground>
                <h1 data-title>{t('about.header')}</h1>
            </TitleBackground>
            <StyledBody data-body $baseHeight={1000} opacity="1">
                <div style={{display:'flex', padding:'1.25rem' }}>
                    <div style={{paddingRight:'1rem' }}>
                        <h3>{t('about.hello')}</h3>
                        <Separator></Separator>
                        <p>{t('about.helloP')}</p>
                        <p>{t('about.helloP2')}</p>
                    </div>
                    <img src='img/fotoDarkMode.jpeg' width="350px" style={{ borderRadius: '10px'}}></img>
                </div>
                <div style={{display: 'flex', padding:'1.25rem'}}>
                    <div>
                        <h3>{t('about.education')}</h3>
                        <Separator></Separator>
                        <p>{t('about.educationP')}</p>
                        <h3>{t('about.motivation')}</h3>
                        <Separator></Separator>
                        <p>{t('about.motivationP')}</p>
                        <h3>{t('about.interests')}</h3>
                        <Separator></Separator>
                        <p>{t('about.interestsP')}</p>
                    </div>
                </div>
            </StyledBody>
            
        </>
    )
}

export default About;