import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const Image_URL = "https://raw.githubusercontent.com/mav1283/star_wars_movie_app_followed_from_ryanhemrick/master/public/images/";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>{this.props.data.title}</Card.Title>
                    <Card.Img variant="top" src={Image_URL + this.props.data.poster} />
                    <Card.Body>
                    <Card.Title>Description:</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="overflow">{this.props.data.description}</ListGroupItem>
                        </ListGroup>
                        <Card.Text>
                        {/* Description:
                        {this.props.data.description}<br/> */}
                        <Card.Title>Characters:</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{this.props.data.main_characters}</ListGroupItem>
                        </ListGroup>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </>
        );
    }
}



export default Movie
