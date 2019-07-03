import React from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Jumbotron className="text-center">
                    <h1>Welcome to my Star Wars movie app!</h1>
                    <br/>
                    <p>
                        This is where you can find all of 6 Star Wars movies!
                    </p>
                    <br/>
                    <p>
                        <Button href="/movies" variant="primary">Show me the movies!</Button>
                    </p>
                </Jumbotron>
            </>
        );
    }
}



export default App
