import React, {Component} from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
            <td>{this.props.title}</td>
            <td>{this.props.date}</td>
            <td>{this.props.time}</td>
            <td>{this.props.venue}</td>
            <td>{this.props.details}</td>
            </tr>
         );
    }
}
 
export default Row;