import styled from "styled-components";


const StyledButton = styled.button`
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    height: ${(prop) => prop.height};
    background: ${({theme}) => theme.colors.terciary};

        &.threeDButton {
            padding: 1rem 1.1rem;
            border: 2px solid ${({theme}) => theme.colors.terciary};
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

            &::before{
                position: absolute;
                content: "";
                width: 100%;
                height: 100%;
                left: 0;
                bottom: 0;
                background-color: ${({theme}) => theme.colors.fourth};
                border-radius: inherit;
                box-shadow: 0 0 0 2px ${({theme}) => theme.colors.terciary}, 0 0.625em 0 0 ${({theme}) => theme.colors.fifth};
                transform: translate3d(0, 0.75em, -1em);
                transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
            };

            &:hover{
                background: ${({theme}) => theme.colors.secondary};
                border-color: ${({theme}) => theme.colors.secondary};
                transform: translate(0, 0.25em);

                &::before{
                    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.terciary}, 0 0.5em 0 0 ${({theme}) => theme.colors.fifth};
                    transform: translate3d(0, 0.5em, -1em);
                };
            };

            &:active{
                background: ${({theme}) => theme.colors.secondary};
                border-color: ${({theme}) => theme.colors.secondary};
                transform: translate(0em, 0.75em);

                &::before{
                    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary}, 0 0 ${({theme}) => theme.colors.secondary};
                    transform: translate3d(0, 0, -1em); 
                };
            };
        };

        &.prev{
            top: 1.57rem;
            right: 0;
            border-radius: 0rem 0.625rem 0.625rem 0rem;
        };

        &.next{
            top: 1.57rem;
            border-radius: 0.625rem 0rem 0rem 0.625rem;
        };

        @media only screen and (min-width: 0px) and (max-width: 280px){
            display: none;
        };

        @media only screen and (min-width: 281px) and (max-width: 376px){
            display: none;
        };

        @media only screen and (min-width: 377px) and (max-width: 600px){
            display: none;
        };

        @media only screen and (min-width: 1300px) and (max-width: 1800px){
            height: 15.2rem;
        };
`

export default StyledButton