import styled from "styled-components";


const CarouselSlide = styled.li`
    position: inherit;
    inset: 0;
    opacity: 0;

        &[data-active] {
        opacity: 1;
        };

        img {
            display: block;
            object-fit: cover;
            object-position: center;
            border-inline: 6.25rem;
            border-color: ${({theme}) => theme.colors.terciary};
            cursor: pointer;
            width: 45rem;
            height: 28rem;
        };

/* Media screen variables for responsiveness */
        @media only screen and (min-width: 0px) and (max-width: 280px){
            img{
                width: 15rem;
                height: 10rem;
                border: none;
                border-radius: 10%;
                }
        };

        @media only screen and (min-width: 281px) and (max-width: 376px){
            img{
                width: 20rem;
                height: 13rem;
                border: none;
                }
        };

        @media only screen and (min-width: 377px) and (max-width: 600px){
            img{
                width: 20rem;
                height: 13rem;
                border: none;
                }
        };

        @media only screen and (min-width: 601px) and (max-width: 830px){
            img{
                width: 40rem;
                height: 28rem;
                }
        };

        @media only screen and (min-width: 830px) and (max-width: 1299px){
            img{
                width: 43rem;
                height: 28.125rem;
                }
        };

        @media only screen and (min-width: 1300px) and (max-width: 1800px){
            img{
                max-height: 15rem;
                width: 39rem;
                }
        };

        @media only screen and (min-width: 1801px) and (max-width: 2000px){
            img{
                width: 41.875rem;
                height: 28.125rem;
                }
        };

/* Specific media screen, for exemple Nest Hub */
        @media only screen and (width: 1024px) and (height: 600px){
            img{
                max-height: 15rem;
                width: 39rem;
                }
        };

`

export default CarouselSlide