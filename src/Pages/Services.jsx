import React from 'react';
import styled from "styled-components";

function Services() {
    const ServicesPage = styled.section`
    witdh: 100vw; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
  return (
    <ServicesPage id='services'>
        <h2>Services Section</h2>
    </ServicesPage>
  )
}

export default Services