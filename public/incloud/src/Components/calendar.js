import React, {Component} from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios'
import Header from "./header";
import 'react-big-calendar/lib/css/react-big-calendar.css'

class Calendar extends Component {
    state = {
        events: []
    }


    constructor() {
        super();
        BigCalendar.setLocalizer(
            BigCalendar.momentLocalizer(moment)
        );
        this.getCaledarDays();
    }

    getCaledarDays() {
        var $this = this;
        axios.get(global.host + 'book/all').then(function (xhr) {
            $this.setState({
                events: xhr.data
            });
        });
    }
    render() {
        return (
            <span>
                <Header/>
    <BigCalendar
        {...this.props}
        events={this.state.events}
        defaultDate={new Date()}
        views={['month', 'day', 'week']}
    />
            </span>
        )
    }
}
export default Calendar