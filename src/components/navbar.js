import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaShoppingBag } from 'react-icons/fa';
import logo from '../images/logo.svg';

import { grey, darkGrey, above, below } from '../utils';
import { dimOnHover } from '../elements';

const NavBarWrapper = styled.div`
  font-weight: 600;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  ${above.laptop`
    display: table;
    padding-left: 4rem;
    padding-right: 4rem;
  `}

  a {
    color: ${grey};
    display: block;
    margin-bottom: 0.5rem;
    text-align: center;
    ${dimOnHover};
    ${above.laptop`
      display: table-cell;
      text-align: left;
      margin-bottom: 0;
    `}

    img {
      ${below.tablet`
        margin-bottom: 1rem;
      `}
    }

    .gatsby-image-wrapper {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      ${below.tablet`
        margin-bottom: 0;
      `}
    }
  }
`;

const NavLinkWrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  ${above.laptop`
    display: table-cell;
    width: 75%;
    text-align: right;
  `}

  a {
    ${dimOnHover};
    color: ${darkGrey};
    font-size: 0.875rem;
    display: inline-block;
    margin-right: 1rem;
    ${above.mobileM`
      font-size: .975rem;
    `}
    ${above.mobileL`
      font-size: 1rem;
      margin-right: 2rem;
    `}
  }
  a:last-child {
    margin-right: 0;
  }
`;

const Navbar = () => (
  <NavBarWrapper>
    <Link to="/">
      <img src={logo} alt="coffee cup" width="35" height="35" />
    </Link>

    <NavLinkWrapper>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/shop">Shop</Link>
      <span>
        <FaShoppingBag className="cart-icon snipcart-checkout" />
      </span>
    </NavLinkWrapper>
  </NavBarWrapper>
);

export default Navbar;
