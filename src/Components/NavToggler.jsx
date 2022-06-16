import React, { useState } from "react";
import styled from "styled-components";
import NavList from "./NavList";

function NavToggler() {
  const [toggleNav, setToggleNav] = useState(false);

  const Hamburger = styled.div`
    position: fixed;
    right: 2rem;
    top: 10px;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    z-index: 2;

    div {
      background-color: ${({toggleNav})=> toggleNav ? "red" : "white"};
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${({ toggleNav }) =>
          toggleNav ? "rotate(45deg)" : "rotate(0)"};
      }

      &:nth-child(2) {
        transform: ${({ toggleNav }) =>
          toggleNav ? "translate(100px)" : "translate(0)"};
      }

      &:nth-child(3) {
        transform: ${({ toggleNav }) =>
          toggleNav ? "rotate(-45deg)" : "rotate(0)"};
      }

      @media screen and (min-width: 761px){
          display: none;
      }
    }
  `;

  return (
      <>
    <Hamburger toggleNav={toggleNav} onClick={() => setToggleNav(!toggleNav)}>
      <div />
      <div />
      <div />
    </Hamburger>
    <NavList toggleNav = {toggleNav} setToggleNav={setToggleNav} />
      </>
  );
}

export default NavToggler;
