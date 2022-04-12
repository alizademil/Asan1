// import { render } from '@testing-library/react';
import React , {Component} from 'react';

class WeatherCC extends Component {
 render() {
    return (
        <div>
        Today Weather is <span  style={this.props.style}> {this.props.status} </span>
        </div>
    );
    }
}
export default WeatherCC;
