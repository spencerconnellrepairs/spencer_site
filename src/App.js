import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import logo from './logo.svg';
import video from './assets/video.webm';
import styled from 'styled-components';
import './App.css';

const StyledVideo = styled.video`
  width: 118%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`;

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
          <StyledVideo id="Video" src={video} autoPlay muted loop></StyledVideo>
          <Services/>
          <Contact/>
        </Content>
    </div>
  );
}

export default App;
