import React, {Component} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Date extends Component {
    handleDate(date) {
        global.date = date
    }
    constructor() {
        super();
        global.date = null
        this.handleDate = this.handleDate.bind(this)
    }
    render() {

        return (
            <div className="form-group row">
                <div className="col-md-2">
                    Date:
                </div>
                <div className="col-md-10">
                    <DayPickerInput onDayChange={day => this.handleDate(day)}/>
                </div>
            </div>
        )
    }
}

export default Date