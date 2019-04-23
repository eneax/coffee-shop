import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { Container, InfoWrapper } from '../components/styles/globalStyles'

const InfoSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
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
