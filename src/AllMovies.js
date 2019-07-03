import React from 'react';
import Movie from './Movie'

const Movie_URL = "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json";


class AllMovies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        fetch(Movie_URL)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            this.setState({
                movies: data.movies
            }, ()=>{
                console.log(this.state.movies)
            })
        })
    }

    render() {
        let listMovies = this.state.movies.map((m) => {
            return <Movie data={m} />
        })
        return (
            <>
                {listMovies}
            </>
        );
    }
}



export default AllMovies
