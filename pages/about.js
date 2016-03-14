/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>CfA Dance Party</h1>
        <p>Submit a youtube video link!</p>
        <div className='songContainer'>
          <input type='text' id='song' placeholder="youtube url goes here" />
          <button type='submit' className='icon' id='submit'>🎉</button>
        </div>
      </div>
    );
  }

}
