import styled from "styled-components";


const NavTxtButton = styled.span`
    cursor: pointer;
    font-weight: bold;
    transition: font-size 0.2s ease, color 0.2s ease;
    text-decoration: none;

        &:hover{
            font-size: 16.5px;
            color: ${({theme}) => theme.colors.fourth};
            margin-bottom: -0.2%;
        };

        &:active{
            font-size: 14px;
            color: ${({theme}) => theme.colors.fifth};
        }

`

export default NavTxtButton