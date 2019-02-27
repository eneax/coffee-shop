import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaShoppingBag } from 'react-icons/fa'
import logo from '../images/logo.svg'


const HeaderWrapper = styled.header`
  background-color: #fff;
  color: rgba(0, 0, 0, .8);
  font-family: 'avenir next', avenir, sans-serif;
  text-align: center;

  a {
    display: inline-block;
    padding: 1rem;
  }

  h1 {
    margin-top: .5rem;
    margin-bottom: 0;
    font-family: baskerville, serif;
    font-style: italic;
    font-weight: 100;
    font-size: 3rem;
  }

  h2 {
    margin-top: .5rem;
    margin-bottom: 0;
    font-size: .875rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
`

const NavbarWrapper = styled.nav`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;

  a, span {
    font-size: 1rem;
    display: inline-block;
    padding: 1rem;

    background: linear-gradient(to bottom, #ece8dc 0%, #ece8dc 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    color: rgba(0, 0, 0, .8);
    text-decoration: none;
    transition: background-size .2s;

    &:hover {
      background-size: 4px 50px;
    }
  }


  @media (min-width: 60em) {
    a {
      font-size: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`


const Navbar = () => (
  <HeaderWrapper>
    <Link to='/'>
      <img src={logo} alt='coffee cup' width='35' height='35'/>
    </Link>
    <h1>Joe's</h1>
    <h2>Coffee Shop</h2>

    <NavbarWrapper>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <span>
        <FaShoppingBag className='cart-icon snipcart-checkout' />
      </span>
    </NavbarWrapper>
  </HeaderWrapper>
)

export default Navbar
