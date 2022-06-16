import React from 'react';
import styled from "styled-components";

function Home() {
    const HomePage = styled.section`
    witdh: 100vw; 
    height: calc(100vh - 3rem);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    `;
  return (
    <HomePage id='home'>
        <h2>Home Section</h2>
    </HomePage>
  )
}

export default Home