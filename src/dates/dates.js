import React, {Component} from 'react';
import './dates.css';

class dates extends Component {
    render() {
        return(
        <form > 
            <label className="form">
                Date:
                <input type="date"  className="input" name="date" onChange={e => this.props.onChangeDate(e)} />
            </label>  
        </form> 
        )
    }
}

export default dates;