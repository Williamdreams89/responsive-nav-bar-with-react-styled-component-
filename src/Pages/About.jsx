import React from 'react';
import styled from "styled-components";

function About() {
    const AboutPage = styled.section`
    witdh: 100vw; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
  return (
    <AboutPage id='about'>
        <h2>About Section</h2>
    </AboutPage>
  )
}

export default About