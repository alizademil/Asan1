import React, {Component} from 'react';

function WeatherFC(props) {
    return (
        <div>
            Today Weather is <span style= {props.style}  >  {props.status} </span>
        </div>
    )
}

export default WeatherFC;
