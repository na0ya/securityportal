/** @jsx React.DOM */

var SecurityportalApp = require('./SecurityportalApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={SecurityportalApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
