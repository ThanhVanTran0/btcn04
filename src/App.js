import React from 'react';

import Navbar from './Container/Navbar'
import Explore from './components/Explore'
import TagSearch from './Container/TagSearch'
import Photo from './components/Photo'


import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    queryChange = (value) => {
        this.setState({
            query: value
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path='*' component={(props) => <Navbar queryChange={this.queryChange} {...props} query={this.state.query}/>}/>
                        <Route exact path='/btcn04/' component={Explore} />
                        <Route exact path='/btcn04/search' component={(props) => <TagSearch query={this.state.query} {...props}/>} />
                        <Route exact path='/btcn04/photo/:id' component={Photo}/>
                    </div>
                </Router>
            </div>

        );
    }
}

