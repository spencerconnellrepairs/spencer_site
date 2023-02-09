import React, { useEffect } from 'react';
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
  const handleShrink = () => {
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById("Navbar").style.height = "100px";
    } else {
      if (window.innerWidth >= 1200)
      document.getElementById("Navbar").style.height = "300px";
      else if (window.innerWidth >= 1000)
      document.getElementById("Navbar").style.height = "200px";
    }
  }
  
  useEffect( () => {
    window.addEventListener('scroll', handleShrink);
    window.addEventListener('resize', handleShrink);

    return () => {
      window.removeEventListener('scroll', handleShrink);
      window.removeEventListener('resize', handleShrink);
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
