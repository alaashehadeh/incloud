import React, { Component } from 'react';
import axios from 'axios'
import Header from "./header";

class Main extends Component {
    getUser() {
        var $this = this;
        axios.get(global.host + 'user/info').then(function (xhr) {
            console.log(xhr.data);
            localStorage.setItem('user', JSON.stringify(xhr.data));
            global.user = JSON.parse(localStorage.user);
            $this.setState({
                loader: true
            });
        })
    }
  render() {
      if(!this.state.loader) {
          var content = <span>
        <div className="text-center"><img src={require('../images/logo.png')}/> </div>
            <div className="text-center">
              <img src={require('../images/loader.gif')}/>
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

export default Main;
