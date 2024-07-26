import styled from 'styled-components';

const ResponsiveWidth = (baseWidth, rootFontSize = 16) => {
  const toRem = (value) => `${value / rootFontSize}rem`;

  return {
    xs: toRem(baseWidth * 0.2481), // 24.81%
    sm: toRem(baseWidth * 0.3519), // 35.19%
    md: toRem(baseWidth * 0.8269), // 82.69%
    ld: toRem(baseWidth * 0.858), // 85,80%
    lg: toRem(baseWidth * 0.8827), // 88.27%
    xl: toRem(baseWidth * 0.8846), // 88.46%
    xxl: toRem(baseWidth * 0.92), // 92%
    same: toRem(baseWidth * 1), // 100%
  };
};

const Separator = styled.div.attrs(({ $baseWidth }) => ({
  $baseWidth: $baseWidth
}))`
  background-color: ${({ theme }) => theme.colors.terciary};
  height: 0.1rem;
  margin-left: ${({ $left }) => $left};
  margin-bottom: 0.7rem;
  justify-content: center;

  ${({ $baseWidth }) => {
    const responsiveWidth = ResponsiveWidth($baseWidth);
    return `
      width: ${responsiveWidth.same}; /* Valor padrão */

      @media only screen and (max-width: 280px) {
        width: ${responsiveWidth.xs};
      }

      @media only screen and (min-width: 281px) and (max-width: 376px) {
        width: ${responsiveWidth.sm};
      }

      @media only screen and (min-width: 377px) and (max-width: 600px) {
        width: ${responsiveWidth.sm};
      }

      @media only screen and (min-width: 601px) and (max-width: 1299px) {
        width: ${responsiveWidth.xxl};
      }

      @media only screen and (min-width: 1300px) and (max-width: 1800px) {
        width: ${responsiveWidth.ld};
      }

      @media only screen and (min-width: 1801px) and (max-width: 2000px) {
        width: ${responsiveWidth.xxl};
      }

      @media only screen and (width: 1024px) and (height: 600px) {
        width: ${responsiveWidth.xs};
      }
    `;
  }}
`;

export default Separator;
