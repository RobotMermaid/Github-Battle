

/* FIRST--------------
  focused
  independent
  reusable
  small
  testable
  --------------------*/

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
