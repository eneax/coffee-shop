import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'


const InfoSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Container = styled.div`
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
`

const InfoWrapper = styled.div`
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
`

const HeadingTwo = styled.h2`
  color: #222;
  text-transform: uppercase;
  text-align: center;

  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  font-weight: 700;
`

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color:  rgb(255, 158, 9);
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid rgb(255, 158, 9);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background:  rgb(255, 158, 9);
    color: #2d1e1f;
  }
  &:focus, &.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  text-transform: uppercase;
`


const Info = () => (
  <InfoSection>
    <Container>
      <InfoWrapper>
        <HeadingTwo>our story</HeadingTwo>
        <p>
          Nestled in the heart of New York’s West Village, we are a community based coffee & tea house with a small, friendly staff of passionate baristas, skilled cooks and a belief that good things can come from simple ideas.
        </p>
        <Link to='/about'>
          <Button>
            About
          </Button>
        </Link>
      </InfoWrapper>
    </Container>
  </InfoSection>
)

export default Info
