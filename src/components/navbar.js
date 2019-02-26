import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../images/logo.svg'


const HeaderWrapper = styled.header`
  background-color: #fff;
  color: rgba(0, 0, 0, .8);
  text-align: center;
  /* padding-top: 2rem; */
  /* padding-bottom: 2rem; */
  font-family: 'avenir next', avenir, sans-serif;

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
  /* border-top: 1px solid #E1E1E1; */
  /* border-bottom: 1px solid #E1E1E1; */
  /* border-bottom: 2px solid #393939; */

  text-align: center;
  /* max-width: 48rem; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;

  a, span {
    color: rgba(0, 0, 0, .8);
    font-size: 1rem;
    display: inline-block;
    padding: 1rem;
    transform: skew(-15deg);
    border: 1px solid #E1E1E1;
    
    /* link */
    text-decoration: none;
    transition: color .15s ease-in;
    &:link, &:visited, &:hover, &:active {
      transition: color .15s ease-in;
    }
    &:focus {
      transition: color .15s ease-in;
      outline: 1px dotted currentColor;
    }

    /* animate */
    &:hover, &:focus {
      transition: background-color .15s ease-in-out;
    }

    /* color */
    &:hover, &:focus {
      background-color: #cdecff;
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
      <img src={logo} alt='coffee cup' width='50' height='50'/>
    </Link>
    <h1>Joe's</h1>
    <h2>Coffee Shop</h2>

    <NavbarWrapper>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <span>
        <FaShoppingCart className='cart-icon snipcart-checkout' />
      </span>
    </NavbarWrapper>
  </HeaderWrapper>
)

export default Navbar


































// import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import { FaShoppingCart } from 'react-icons/fa'
// import logo from '../images/logo.svg'

// export default class navbar extends Component {
//   state = {
//     navbarOpen: false,
//     css: "collapse navbar-collapse",
//     links: [
//       {
//         id: 1,
//         path: "/",
//         text: "home"
//       },
//       {
//         id: 2,
//         path: "/about",
//         text: "about"
//       },
//       {
//         id: 3,
//         path: "/contact",
//         text: "contact"
//       }
//     ]
//   }

//   navbarHandler = () => {
//     this.state.navbarOpen 
//       ? this.setState({
//           navbarOpen: false,
//           css: "collapse navbar-collapse",
//         })
//       : this.setState({
//           navbarOpen: true,
//           css: "collapse navbar-collapse show",
//         })
//   }

//   render() {
//     return (
//       <nav className='navbar navbar-expand-sm bg-light navbar-light'>
//         <Link to='/' className='navbar-brand'>
//           <img src={logo} alt='coffee cup' width='50' height='50'/>
//         </Link>
//         <button 
//           className='navbar-toggler' 
//           type='button' 
//           onClick={this.navbarHandler}
//         >
//           <span className='navbar-toggler-icon' />
//         </button>
//         <div className={this.state.css}>
//           <ul className="navbar-nav mx-auto">
//             {this.state.links.map(({ id, path, text }) => (
//               <li key={id} className='nav-link text-capitalize'>
//                 <Link to={path}>{text}</Link>
//               </li>
//             ))}
//             <li className='nav-item ml-sm-5'>
//               <FaShoppingCart className='cart-icon snipcart-checkout' />
//             </li>
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// }
