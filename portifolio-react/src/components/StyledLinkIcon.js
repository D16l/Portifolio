import styled from "styled-components";


const StyledLinkIcon = styled.a.attrs({
    target: '_blank',
    rel: 'noopener'
})`
    margin: 0% 3%;
    align-items: center;
    transition: transform ease-in-out 0.3s;

        svg{
            fill: ${({theme}) => theme.colors.terciary}
        }

        &:hover{
            transform: scale(1.3);

            svg{
                fill: ${({theme}) => theme.colors.secondary}
            }
        };

        &:active{
            transform: scale(1);
            transition: transform ease-in 0.2s;
        };
`

export default StyledLinkIcon