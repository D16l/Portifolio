import React, { Suspense, useEffect,} from 'react';
import Transitions from '../components/Transitions';
import NoCopy from '../components/NoCopy';
import NavTxtButton from '../components/NavTxtButton'
import StyledButton from '../components/StyledButton'
import CarouselSlide from '../components/CarouselSlide';
import StyledLinkIcon from '../components/StyledLinkIcon';
import TitleBackground from '../components/TitleBackground';
import StyledBody from '../components/StyledBody';
import styled from 'styled-components';
import GitHubIcon from '../components/GitHubIcon';
import LinkedinIcon from '../components/LinkedinIcon';
import MailIcon from '../components/MailIcon';
import { useTranslation } from 'react-i18next';
import Separator from '../components/Separator';



const LittleAboutMe = styled.p`
    width: 48rem;
    padding: 1.5% 2% 0% 2%;

      @media only screen and (min-width: 0px) and (max-width: 280px){
        width: 16rem;
        font-size: 14.5px;
        padding: 1rem 0 0 0rem;
      };

      @media only screen and (min-width: 281px) and (max-width: 376px){
        width: 21rem;
        font-size: 15px;
        padding: 1rem 0 0 0rem;
      };
      @media only screen and (min-width: 377px) and (max-width: 600px){
        width: 21rem;
        font-size: 17px;
        padding: 1rem 0 0 0;
      };
      @media only screen and (min-width: 1300px) and (max-width: 1800px){
        width: 46rem;
        padding-bottom: 0rem;
      };
      @media only screen and (min-width: 2001px){
        width: 50rem;
      };
      @media only screen and (width: 1024px) and (height: 600px){
        width: 46rem;
        padding-bottom: 0rem;
      };
`; // Component to make the paragraph responsive

function Home() {
  const {t} = useTranslation();

  useEffect( () =>{
    const initializeCarousel = () => {
      const buttons = document.querySelectorAll('[data-carousel-button]') // Get the items with that property
      
      buttons.forEach( button => {
          //Define the displacement based in the button clicked (next/prev)
          button.addEventListener('click', () => {
              const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
          //Find the closest container in the carousel and select the element within the slide
              const slides = button
              .closest('[data-carousel]')
              .querySelector('[data-slides]');
          //Find the active slide
              const activeSlide = slides.querySelector('[data-active]');
          //Calculate the new index of the slide based in the displacement
              let newIndex = [...slides.children].indexOf(activeSlide) + offset;
          //Adjust the index if its lower than 0 or greater than the number of slides
              if (newIndex < 0) {
                  newIndex = slides.children.length -1;
              };
              if (newIndex >= slides.children.length){
                  newIndex = 0;
              }
          //Defines the new active slide
              slides.children[newIndex].dataset.active = true;
              slides.children[newIndex].style.display = 'block';
          //Remove the attribute data-active of the previous slide and maked it hidden
              delete activeSlide.dataset.active;
              activeSlide.style.display = 'none';
      
          })
      })
      };
    const navigationButtons = () => {
        const buttons = document.querySelectorAll('[data-nav-button]');
      //Add a click event for every found button
        buttons.forEach(button => {
          button.addEventListener('click', () => {
      //Find the nearest carousel container
            const carousel = button.closest('[data-carousel]');
      //Select all slide within the carousel
            const slides = carousel.querySelectorAll('[data-slide]');
      //Obtain the index of the clicked button from the data-nav-button attribute
            const index = parseInt(button.getAttribute('data-nav-button'));
      //Hide all of the slide and remove the attribute data-active of each one
            slides.forEach(slide => {
              slide.style.display = 'none';
              slide.removeAttribute('data-active');
            });
      //Display the slide corresponding to the index and defines it active
            if (slides[index]) {
              slides[index].style.display = 'block';
              slides[index].setAttribute('data-active', 'true');
            }
          });
        });
      };
    const clickMe = () => {
      // Select the ement by ID and the data selector
        const firstTitle = document.getElementById('firstTitle');
        const secondTitle = document.getElementById('secondTitle');
        const afterTitle = document.querySelector('[data-body]');
      //Verifies if the elements were found
        if (firstTitle && secondTitle && afterTitle) {
      //Add a click event for the fisrt title
          firstTitle.addEventListener('click', () => {
      //Add a animation class from the Animate.css library to the element afterTitle and defines the opacity to 1
            afterTitle.classList.add('animate__fadeInDown');
            afterTitle.style.opacity = '1';
      //Waits 100 milliseconds before adding the animation class to the first title
            setTimeout(() => {
                firstTitle.classList.add('animate__fadeOutUp')
            }, 100);
      //Waits 1000 milliseconds before hiding the first title
            setTimeout(() => {
              firstTitle.style.display = 'none';
          }, 1000);
      //Waits 1000 milliseconds before showing the second title and adding the animation class to it
            setTimeout(() => {
              secondTitle.classList.add('animate__fadeInUp')
              secondTitle.style.display = 'flex';
              firstTitle.style.display = 'none';
          }, 1000);
    
          });
        } else {
      //Show and error if either elements are not found
          console.error('Element with id "firstTitle" or "secondTitle" not found');
        }
      }

    initializeCarousel();
    navigationButtons();
    clickMe();
  }, []);

  return (
    <>
{/*Part where the titles are located and where an animation is performed with the 'ClickMe' function.*/}
      <TitleBackground>
          <NoCopy><h1 id="firstTitle" style={{ display: 'flex' }}>{t('home.click')}</h1></NoCopy>
          <h1 id="secondTitle" style={{ display: 'none' }}>{t('home.header')}</h1>
      </TitleBackground>
{/* Using body component where you put the height in px based in your desired body height*/}
        <StyledBody $baseHeight={736} opacity="0" data-body>
          <LittleAboutMe>{t('home.introduction')}</LittleAboutMe>
          <Separator $baseWidth={800} $left="1rem"></Separator>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{ position: 'relative'}} data-carousel>
{/* Using data-nav-button to create an index in each of the buttons, and using those index in the navigationButtons function */}
              <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <NoCopy><NavTxtButton tabIndex="1" data-nav-button="0">{t('home.about')}</NavTxtButton></NoCopy>
              <NoCopy><NavTxtButton tabIndex="2" data-nav-button="1">{t('home.skills')}</NavTxtButton></NoCopy>
              <NoCopy><NavTxtButton tabIndex="3" data-nav-button="2">{t('home.projects')}</NavTxtButton></NoCopy>
              </div>
{/* This is where the images for the Carousel are. They use React Routes for the other pages */}
              <ul style={{ padding:'0.9rem 3rem 0 3rem' }} data-slides>
                <CarouselSlide tabIndex="5" style={{ display: 'block' }} data-slide data-active><Transitions src="img/stillDoing.png" alt="About" to="/about"/></CarouselSlide>
                <CarouselSlide tabIndex="5" style={{ display: 'none' }} data-slide><Transitions src="img/stillDoing.png" alt="Skills" to="/skills"/></CarouselSlide>
                <CarouselSlide tabIndex="5" style={{ display: 'none' }} data-slide><Transitions src="img/stillDoing.png" alt="Projects" to="/projects"/></CarouselSlide>
              </ul>
{/* Component button, using a prop called "height" for re-usability in other pages */}
              <NoCopy><StyledButton tabIndex="4" height="28.11rem" className="next threeDButton" data-carousel-button="next">&#10094;</StyledButton></NoCopy>
              <NoCopy><StyledButton tabIndex="6" height="28.11rem" className="prev threeDButton" data-carousel-button="prev">&#10095;</StyledButton></NoCopy>
{/* SVG icons with different links to specific pages, this component can be used in every SVG icon */}
                <div style={{ justifyContent: 'center', display: 'flex'}}>
                  <StyledLinkIcon tabIndex="7" href="https://github.com/D16l"><GitHubIcon></GitHubIcon></StyledLinkIcon>
                  <StyledLinkIcon tabIndex="8" href="https://www.linkedin.com/in/d16l"><LinkedinIcon></LinkedinIcon></StyledLinkIcon>
                  <StyledLinkIcon tabIndex="9" href="mailto:contato@devsspace.com.br"><MailIcon></MailIcon></StyledLinkIcon>
                </div>
            </div>
          </div>
        </StyledBody>
    </>
  );
}

export default function WrappedHome() {
  return (
    <Suspense fallback="...loading">
      <Home />
    </Suspense>
  )
}