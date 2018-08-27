import React, {Component} from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
            <td> Abstract Art Show</td>
            <td> 08/27/2018</td>
            <td> 11:00-2:00</td>
            <td>State Fair Grounds</td>
            <td> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi earum perferendis nulla quidem! Expedita, voluptas sint cum dignissimos error nisi accusantium repellendus eligendi, quas, dolor et quisquam distinctio atque.</td>
          </tr>
         );
    }
}
 
export default Row;