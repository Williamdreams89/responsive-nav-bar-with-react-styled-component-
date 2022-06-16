import React from 'react';
import styled from "styled-components";
import MainNavList from './MainNavList';
import NavToggler from './NavToggler';

function Navigation() {
    const Navbar = styled.nav`
        height: 3rem;
        background-color: #333;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: sticky;
        top: 0;
      
        @media screen and (max-width: 760px){
          h2{
            position: absolute;
            left: 2rem;
          }
        }

    `;
  return (
    <Navbar>
        <h2>Brand Logo</h2>
        <MainNavList />
        <NavToggler />
    </Navbar>
  )
}

export default Navigation