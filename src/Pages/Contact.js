import React from 'react';
import styled from "styled-components";

function Contact() {
    const ContactPage = styled.section`
    witdh: 100vw; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
  return (
    <ContactPage id='contact'>
        <h2>Contact Section</h2>
    </ContactPage>
  )
}

export default Contact