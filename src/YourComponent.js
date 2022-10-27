import React, { Component } from 'react';
import Map from './components/Map';
/*
* Use this component as a launching-pad to build your functionality.
*
*/
export default class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
		  <Map />
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};