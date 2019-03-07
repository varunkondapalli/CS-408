var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Login from 'Login';
var Main = require('Main');
require('style!css!foundation-sites/dist/foundation.min.css');

ReactDOM.render(
         <Router history = {hashHistory}>
           <Route path="/">
            <Route path="main" component={Main}/>
            <IndexRoute component={Login}/>
           </Route>
         </Router>,
      document.getElementById('app')
);
