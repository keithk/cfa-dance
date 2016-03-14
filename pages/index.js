/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Submit from  '../components/Submit/Submit.js';
import List from '../components/List/List.js';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>CfA Dance Party</h1>
        <Submit />
        <List />
      </div>
    );
  }

}
