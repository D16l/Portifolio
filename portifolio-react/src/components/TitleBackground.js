import styled from "styled-components"

const TitleBackground = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.terciary};
    z-index: 2;
    margin: 0;
    padding: 7rem 5rem 0rem 5rem;
    width: 51rem;
    height: 12.5rem;
    background: ${({theme}) => theme.colors.terciary};
    transition: color 0.5s ease-out;

/* Media screen variables for responsiveness on almost all devices */
    @media only screen and (min-width: 0px) and (max-width: 280px){
        width: 17.8rem;
        padding: 3rem 1rem 0 2.8rem;
        font-size: 2rem;
    };

    @media only screen and (min-width: 281px) and (max-width: 376px){
        width: 23.5rem;
        padding: 3rem 0rem 0 1rem;
        font-size: 3rem;
    };

    @media only screen and (min-width: 377px) and (max-width: 600px){
        width: 23.2rem;
        padding: 3rem 0rem 0 1rem;
        font-size: 3rem;
    };

    @media only screen and (min-width: 1300px) and (max-width: 1800px){
        width: 48rem;
        height: 10rem;
        padding: 5rem 0 0 0 ;
    };

    @media only screen and (min-width: 2001px){
        width: 55rem;
    };


/* In this specific media screens are the wide width and low height for exemple Nest Hub */
    @media only screen and (width: 1024px) and (height: 600px){
      width: 48rem;
      height: 10rem;
      padding: 5rem 0 0 0 ;
    };
`

export default TitleBackground