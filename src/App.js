import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import styled from 'styled-components';
import './App.css';
function App() {

  const scrollShrink = () => {
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById("Navbar").style.height = "100px";
    } 
    else {
      if (window.innerWidth <= 1000)
      document.getElementById("Navbar").style.height = "100px";
      else if (window.innerWidth <= 1200)
      document.getElementById("Navbar").style.height = "200px";
      else
      document.getElementById("Navbar").style.height = "300px";
    }
  }

  const resizeShrink = () => {
    if (window.innerWidth <= 1000)
    document.getElementById("Navbar").style.height = "100px";
    else if (window.innerWidth <= 1200)
    document.getElementById("Navbar").style.height = "200px";
    else
    document.getElementById("Navbar").style.height = "300px";
  }
  
  useEffect( () => {
    window.addEventListener('scroll', scrollShrink);
    window.addEventListener('resize', resizeShrink);

    return () => {
      window.removeEventListener('scroll', scrollShrink);
      window.removeEventListener('resize', resizeShrink);
    }
  }, []);

  return (
    <div className="App" >
        <Navbar/>
        <Content>
          <Services/>
          <Contact/>
        </Content>
    </div>
  );
}

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default App;
