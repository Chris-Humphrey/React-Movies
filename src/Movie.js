import React from 'react';
import {Card} from 'react-bootstrap';


class Movie extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.data.title}</Card.Title>
                        <Card.Text>
                        Description:
                        {this.props.data.description}<br/>
                        Characters:
                        {this.props.data.main_characters}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </>
        );
    }
}



export default Movie
