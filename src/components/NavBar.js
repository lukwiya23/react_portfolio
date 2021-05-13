import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <Nav>
            <h1 id="logo"><a href="#">BrandHub 256</a></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </Nav>
    )
}

const Nav  = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding: 1rem 10rem;
background:#282828;


a{
    text-decoration:none;
    color:white;
}
ul{
    display:flex;
    list-style:none;
}
h1{
    font-size:1.8rem;
    font-family:'Lobster';
    font-weight:lighter;
}
li{
    padding-left:10rem;
}
`

export default NavBar
