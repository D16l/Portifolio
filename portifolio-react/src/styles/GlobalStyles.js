import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html{
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;

        
    };
    
    body{
        width: 100vw;
        height: 100vh;
        margin: 0;
        background-color: ${({theme}) => theme.colors.body};
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        position: relative;
    };

    h1{
        font-family: 'Bebas Neue';
        font-size: 4rem;
        color: ${({theme}) => theme.colors.sixty};
        animation-duration: 1.5s;
    };

    p, span{
        font-family: 'Multi', sans-serif;
        color: ${({theme}) => theme.colors.primary};
        overflow-wrap: break-word;
        word-wrap: break-word;
    };

    ::selection{
                color: white;
                background: ${({theme}) => theme.colors.selection};
            }


/* Media screen variables for responsiveness on almost all devices */
    @media only screen and (min-width: 0px) and (max-width: 280px){
        body{
            width: 2;
            height: auto;
            overflow-x: hidden;
        };

        #secondTitle{
            font-size: 2.7rem;
        }

        #firstTitle{
            font-size: 3rem;
            padding: 2rem 2rem 0 0rem;
        }
    };

    @media only screen and (min-width: 281px) and (max-width: 376px){
        body{
            width: 1;
            height: auto;
            overflow-x: hidden;
        };

        #secondTitle{
            font-size: 3rem;
        };

        #firstTitle{
            padding: 0rem 2rem 0 0rem;
        };
    };

    @media only screen and (min-width: 377px) and (max-width: 600px){
        body{
            width: 1;
            height: auto;
            overflow-x: hidden;
        };

        #secondTitle{
            font-size: 3rem;
        };

        #firstTitle{
            padding: 0rem 2rem 0 0rem;
        };
    };

    @media only screen and (min-width: 601px) and (max-width: 830px){
        body{
            width: 51rem;
            height: 75rem;
            align-content: center;
        };

        h1{
            font-size: 3.8rem;
        }
    };

    @media only screen and (min-width: 830px) and (max-width: 1299px){
        body{
            width: 64rem;
            height: 75rem;
            align-content: center;
        };

        h1{
            font-size: 3.8rem;
        }
    };

    @media only screen and (min-width: 1300px) and (max-width: 1800px){
        body{
            width: 84.4rem;
            height: 60rem;
            align-content: center;
        }
    };

    @media only screen and (min-width: 1800px) and (max-width: 2000px){

        h1{
            font-size: 3.8rem;
        }
    }

    @media only screen and (min-width: 2001px){
        body{
            width: 157.2rem;
            height: 80.3rem;
        }
    };



/* In this specific media screens are the wide width and low height for exemple Nest Hub */
    @media only screen and (width: 1024px) and (height: 600px){
        body{
            height: 40rem;
            align-content: center;
        }
    };

    @media only screen and (width: 853px) and (height: 1280px){
        body{
            width: 53rem;
            height: 40rem;
            align-content: center;
        }
    };

    @media only screen and (width: 1280px) and (height: 800px){
        body{
            width: 80rem;
            height: 40rem;
            align-content: center;
        }
    };


`;

export default GlobalStyle