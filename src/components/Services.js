import React, { useEffect } from 'react';
import video from '../assets/video.webm';
import styled from 'styled-components';
import graphic from '../assets/topGraphic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({
            easing: 'ease',
            duration: 1000,
        });
    }, []);

    return (
        <Container id="Services">
            <Title data-aos="flip-down" className="Title">Full Service Instrument Repair and Vintage Restoration</Title>
            <StyledVideo className="Video" src={video} autoPlay muted loop playsinline></StyledVideo>
            <hr className="divider"/>
            <Text>
                <Graphic data-aos="fade-right" ><img src={graphic}/></Graphic>
                <Notes>
                    <Note data-aos="fade-left">
                        <h2>Turn Around</h2>
                        <p>For most repair services such as set up work and refrets I am able to keep a turn around time much shorter then many of the big shops in town. Expect one week or less on most repairs.</p>
                    </Note>
                    <Note data-aos="fade-left">
                        <h2>Restoration</h2>
                        <p>I offer restoration work with an emphasis on pairing musicians and an instrument with their ideal set up and tone. From neck resets to fret work and structural repairs, my focus is to return a guitar at its peak tone and playability. </p>
                    </Note>
                </Notes>
            </Text>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    margin-top: 50px;
    @media (max-width: 1200px) {
        padding: 0 20px;
    }
`

const StyledVideo = styled.video`
margin-top: 100px;
  width: 118%;
`;

const Graphic = styled.div`
    width: 50%;
    img {
        width: 100%;
    }

    @media (max-width: 1200px) {
        width: 100%
    }
`;

const Text = styled.div`
    display: flex;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        width: 70%;
    }
    @media (max-width: 1000px) {
        width: 80%;
    }
`;

const Note = styled.div`
    width: 75%;
    h2 {
        margin-bottom: 0;
        text-align: left;
    }
    p {
        margin-top: 15px;
        font-size: 1.5em;
        text-align: left;
    }

    @media (max-width: 1200px) {
        width: 100%
    }
`;

const Notes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 50%;

    @media (max-width: 1200px) {
        width: 90%
    }
`;