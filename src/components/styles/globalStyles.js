import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #262626;
    background: #fff;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  /* media */
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;

  @media (min-width: 576px) {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }

  margin-right: auto;
  margin-left: auto;
  text-align: center;

  p {
    font-size: 1.25rem;
    font-weight: 300;
    color: #6c757d;
    margin-bottom: 3rem;
  }
`;

export const colors = {};

export const transDefault = 'transition: all .3s ease-in-out';

export const transObject = ({
  property = 'all',
  time = '.3s',
  type = 'ease-in-out',
}) => `transition: ${property} ${time} ${type}`;

export const letterSpacing = ({ spacing = '.1rem' }) =>
  `letter-spacing:${spacing}`;

export const baskerville = `font-family: baskerville,serif;`;

export const border = ({ width = '.15rem', type = 'solid', color = 'white' }) =>
  `border:${width} ${type} ${color}`;
