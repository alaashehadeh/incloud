import React, {Component} from 'react'
import Header from "./header";
import ReactDOM from 'react-dom'
import Date from "./date";
import TimeFromTo from "./timeFromTo";
import axios from 'axios'
import $ from 'jquery'

class Book extends Component {
    showBook() {
        global.date = null
        global.fromTime = null
        global.toTime = null
        if(this.state.bookTime) {
            ReactDOM.render(null,document.getElementById('messages'))
            $('#first').attr('class','fa fa-caret-right');
            var content = null
            this.setState({
                bookTime: false
            })
        }
        else {
            $('#first').attr('class','fa fa-caret-down');
            this.setState({
                bookTime: true
            })
            var content = <span>
                <div className="form-group row">
                    <div className="col-md-2">
                        Description
                    </div>
                    <div className="col-md-10">
                        <textarea id="description" className="form-control" onChange={this.handleDescriptionChange}></textarea>
                    </div>
                </div>
                <Date/>
                <TimeFromTo/>
                <div className="form-group row">
                    <div className="col-md-2">
                        <button className="btn btn-info" onClick={this.saveBook}>Save</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" id="messages"></div>
                </div>
            </span>
        }
        ReactDOM.render(content,document.getElementById('book_time'))
    }

    showBookWithInterval() {
        global.date = null
        global.fromTime = null
        global.toTime = null
        if(this.state.bookWithInterval) {
            $('#second').attr('class','fa fa-caret-right');
            var content = null
            this.setState({
                bookWithInterval: false
            })
        }
        else {
            $('#second').attr('class','fa fa-caret-down');
            this.setState({
                bookWithInterval: true
            })
            var content = <span>
                <div className="alert alert-info">
                    <h4>The book date and start time will be auto defined to now datetime once you click on start</h4>
                </div>
                                <div className="row">
                    <div className="col-md-12" id="interval_messages"></div>
                </div>
                <div className="form-group row">
                    <div className="col-md-2">
                        Description
                    </div>
                    <div className="col-md-10">
                        <textarea id="description" className="form-control" onChange={this.handleDescriptionChange}></textarea>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-2" id="start_btn">
                        <button className="btn btn-info" onClick={this.setStart}>Start</button>
                    </div>
                </div>
            </span>
        }
        ReactDOM.render(content,document.getElementById('interval_time'))
    }

    saveBook() {
        var data = {
            user_id: global.user.user_id,
            description: this.state.description,
            date: global.date,
            from: global.fromTime,
            to: global.toTime
        }
        axios.post(global.host + 'book/create',data).catch(function (error) {
            if(error.response) {
                ReactDOM.render(
                    <div className="alert alert-danger">
                        <ul>
                            {
                                error.response.data.map((val,key) =>
                                <li>{val}</li>
                                )}
                        </ul>
                    </div>,document.getElementById('messages'))
            }
        }).then(function (xhr) {
            if(xhr) {
                ReactDOM.render(<div className="alert alert-success text-center">
                    <h4>You have added the book time correctly</h4>
                </div> ,document.getElementById('messages'))
            }
        });
    }

    setStart() {
        if(!this.state.description) {
            ReactDOM.render(
                <div className="alert alert-danger">Description is required</div>
                    ,document.getElementById('interval_messages'))
        }
        else {
            this.setState({
                start: new Date()
            })
            ReactDOM.render(
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-info">Pause</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger">End Task</button>
                    </div>
                </div>, document.getElementById('start_btn'))
        }
    }
    setEnd() {
        this.setState({
            end: new Date()
        })
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    constructor() {
        super();
        this.state = {
            bookTime: false,
            description: null,
            bookWithInterval: false,
            start: null,
            end: null
        }
        this.showBook = this.showBook.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.saveBook = this.saveBook.bind(this)
        this.showBookWithInterval = this.showBookWithInterval.bind(this)
        this.setStart = this.setStart.bind(this)
    }

    render() {
        return (
            <span>
            <Header/>
                <div className="container">
                    <div className="list-group">
                          <a className="list-group-item list-group-item-action cursor" onClick={this.showBook}>
                              <i id="first" className="fa fa-caret-right"></i> Book time
                          </a>
                    </div>
                    <div id="messages"></div>
                    <div id="book_time"></div>
                    <div className="list-group">
                          <a className="list-group-item list-group-item-action cursor" onClick={this.showBookWithInterval}>
                              <i id="second" className="fa fa-caret-right"></i> Book time with interval
                          </a>
                    </div>
                    <div id="interval_time"></div>
                </div>
            </span>
        )
    }
}

export default Book