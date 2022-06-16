import React from 'react';
import styled from "styled-components";

function GoTop() {
    const ToTopButton = styled.button`
        position: relative;
        bottom: 2rem;
        left: 25rem;
        transform: rotate(90deg);
        font-size: 13px;
        outline: 0;
        border: none;
        cursor: pointer;
        

        a{
            color: black;
            text-decoration: none;
            padding: 4px
        }

        @media screen and (min-width:761px){
            left: 80rem;
        }
    `;
  return (
    <ToTopButton><a href='#home'>Go to Top</a></ToTopButton>
  )
}

export default GoTop