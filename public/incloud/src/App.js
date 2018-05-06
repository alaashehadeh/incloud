import React, { Component } from 'react';
import axios from 'axios'
import Header from "./Components/header";

class App extends Component {
    getUser() {
        var $this = this;
        axios.get(global.host + 'user/info').then(function (xhr) {
            localStorage.setItem('user', JSON.stringify(xhr.data));
            $this.setState({
                loader: true
            });
        })
    }
  render() {
      if(!this.state.loader) {
          var content = <span>
        <div className="text-center"><img src={require('./images/logo.png')}/> </div>
            <div className="text-center">
              <img src={require('./images/loader.gif')}/>
              <h3>Get the user information</h3>
            </div>
        </span>
      }
      else {
          var content = <Header/>
      }

    return content
    ;
  }
  constructor() {
        super();
        this.state = {
            loader: false
        }

      //get user information
      this.getUser = this.getUser.bind(this);
      this.getUser();
  }
}

export default App;
