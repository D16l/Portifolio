import styled from "styled-components";

const ResponsiveHeight = (baseHeight, rootFontSize = 16) => {
  const toRem = (value) => `${value / rootFontSize}rem`;

  return {
    xs: toRem(baseHeight * 0.5869), // 58,69%
    sm: toRem(baseHeight * 0.6195), // 61,95%
    md: toRem(baseHeight * 0.7174), // 71,74%
    lg: toRem(baseHeight * 0.7608), // 76,08%
    xl: toRem(baseHeight * 0.9348), // 93,48%
    same: toRem(baseHeight * 1), // 100%
  };
};

const StyledBody = styled.section.attrs(({ $baseHeight }) => ({
  $baseHeight: $baseHeight
}))`
  justify-content: center;
  opacity: 0;
  z-index: 1;
  animation-duration: 2s;
  width: 55rem;
  height: ${({ $baseHeight }) => ResponsiveHeight($baseHeight).same};
  padding: 0 1.5rem;
  border-radius: 0 0 0.625rem 0.625rem;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.terciary},
    0 1em 0 0 ${({ theme }) => theme.colors.fifth};
  background-color: ${({ theme }) => theme.colors.sixty};
  overflow-x: hidden;

  ${({ $baseHeight }) => {
    const responsiveHeight = ResponsiveHeight($baseHeight);
    return `
      @media only screen and (min-width: 0px) and (max-width: 280px) {
        width: 17.7rem;
        height: ${responsiveHeight.md};
      }

      @media only screen and (min-width: 281px) and (max-width: 376px) {
        width: 23.2rem;
        height: ${responsiveHeight.lg};
      }

      @media only screen and (min-width: 377px) and (max-width: 600px) {
        width: 23.2rem;
        height: ${responsiveHeight.lg};
      }

      @media only screen and (min-width: 601px) and (max-width: 1299px) {
        width: 51rem;
        height: ${responsiveHeight.xl};
      }

      @media only screen and (min-width: 1300px) and (max-width: 1800px) {
        min-width: 48rem;
        max-width: 48rem;
        height: ${responsiveHeight.sm};
      }

      @media only screen and (min-width: 1801px) and (max-width: 2000px) {
        width: 51rem;
        height: ${responsiveHeight.xl};
      }

      @media only screen and (width: 1024px) and (height: 600px) {
        min-width: 48rem;
        max-width: 48rem;
        height: ${responsiveHeight.xs};
      }
    `;
  }}
`;

export default StyledBody;
