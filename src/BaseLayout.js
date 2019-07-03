import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Container, Jumbotron, Button} from 'react-bootstrap';

export default (props) => {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}
