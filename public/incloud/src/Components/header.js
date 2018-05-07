import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-header text-center">
                        <img src={require('../images/logo.png')} />
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/book">Book time</Link></li>
                        <li><a href="#">My calendar</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;