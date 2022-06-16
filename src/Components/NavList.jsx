import React from 'react';
import styled from "styled-components";

function NavList({toggleNav, setToggleNav}) {
    const MenuList = styled.ul`
        background-color: #333;
        width: 90vw;
        height: 90vh;
        position: fixed;
        right: 0;
        top: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 5rem;
        align-items: center;
        font-size: 1.2rem;
        justify-content: center;
        translate:${({toggleNav})=> toggleNav ? "translateX(100%)" : "translateX(0)"};
        right: ${({toggleNav})=> toggleNav ? "0" : "-100%"};
        transition: .3s ease-in;

        a{
            color: white;
            text-decoration: none;
        }
    `;
  return (
    <MenuList toggleNav = {toggleNav} setToggleNav={setToggleNav}>
        <li><a href="#home" onClick={()=> setToggleNav(!toggleNav)}>Home</a></li>
        <li><a href="#about"  onClick={()=> setToggleNav(!toggleNav)}>About </a></li>
        <li><a href="#services" onClick={()=> setToggleNav(!toggleNav)}>Services</a></li>
        <li><a href="#contact" onClick={()=> setToggleNav(!toggleNav)}>Contact</a></li>
    </MenuList>
  )
}

export default NavList