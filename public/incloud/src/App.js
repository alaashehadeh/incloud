import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import Main from "./Components/main";
import Book from "./Components/book";
import Calendar from "./Components/calendar";

class App extends Component {
    render() {
        return (
            <Router>
                <span>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/book" component={Book}/>
                    <Route exact path="/calendar" component={Calendar} />
                </span>
            </Router>
        )
    }
}

export default App;
