import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import graphic from '../assets/bottomGraphic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
    useEffect(() => {
        AOS.init({
            easing: 'ease',
            duration: 1000,
        });
    }, []);

    return (
        <>
            <hr className="divider"/>
            <Container id="Contact">
                <Form data-aos="fade-up">
                    <h1>Let's Connect!</h1>
                    <TextField fullWidth required id="name-input" label="Name" variant="outlined" />
                    <TextField fullWidth required id="name-input" label="Email" variant="outlined" />
                    <TextField multiline rows={4} fullWidth required id="name-input" label="Message" variant="outlined" />
                    <button>Send</button>
                </Form>
                <Graphic data-aos="fade-up" src={graphic} /> 
            </Container>
        </>
    )
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;

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

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    padding: 0 40px;
    * {
        margin: 10px 0;
    }
    button {
        color: #584330;
        border-color: #584330;
        background: transparent;
        font-size: 1.75em;
        border-radius: 2em;
        padding: 0 1em;
        cursor: pointer;
        transition: all ease 1s;
    }
    button:hover {
        background: #d47559;
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const Graphic = styled.img`
    width: 50%;
    
    @media (max-width: 1200px) {
        width: 105%;
    }
`;