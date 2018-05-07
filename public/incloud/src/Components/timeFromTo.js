import React, {Component} from 'react'
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css'

class TimeFromTo extends Component {

    handleFromTime(time) {
        global.fromTime = time
    }

    handleToTime(time) {
        global.toTime = time
    }

    constructor() {
        global.fromTime = null
        global.toTime = null
        super();

        this.handleFromTime = this.handleFromTime.bind(this)
        this.handleToTime = this.handleToTime.bind(this)
    }

    render() {
        const format = 'h:mm a';

        const now = moment().hour(0).minute(0);


        return (
            <span>
                <div className="form-group row">
                    <div className="col-md-2">
                        From:
                    </div>
                    <div className="col-md-10">
                          <TimePicker
                              showSecond={false}
                              className="xxx"
                              onChange={this.handleFromTime}
                              inputReadOnly
                              defaultValue={moment()}
                          />
                    </div>
                </div>

                <div className="form-group row">
                <div className="col-md-2">To: </div>
                <div className="col-md-10">
                     <TimePicker
                         showSecond={false}
                         defaultValue={moment()}
                         className="xxx"
                         onChange={this.handleToTime}
                         inputReadOnly
                     />
                    </div>
                </div>
            </span>

        )
    }

}

export default TimeFromTo