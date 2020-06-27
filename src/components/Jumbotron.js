import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import fieldImage from '../assets/field.jpg';

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Play Ball</h1>
                <p>You Make The Play | Interactive Game</p>
            </Container>
        </Jumbo>
    </Styles>
)