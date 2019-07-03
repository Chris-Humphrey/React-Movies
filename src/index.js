import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './BaseLayout';
// import IndividualPage from './IndividualPage';
import AllMovies from './AllMovies';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path='/movies/:slug' component={IndividualPage} /> */}
                <Route path='/movies' component={AllMovies}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));