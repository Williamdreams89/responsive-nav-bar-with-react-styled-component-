import React from 'react'; 
import styled from "styled-components";

function MainNavList() {
    const MainList = styled.ul`
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        max-width: 400px;
        

        a{
            text-decoration: none;
            color: white;
        }

        @media screen and (max-width: 760px){
            display: none;
        }
    `;
  return (
    <MainList>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </MainList>
  )
}

export default MainNavList