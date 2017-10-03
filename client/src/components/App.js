// if file exports component use CAP letter for name
// REACT ROUTER WORK
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // put actions into actions object

import Header from './Header';
//import Landing from './Landing';
//import Dashboard from './Dashboard';
//import EventNew from './events/EventNew';

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};
const Landing = () => {
  return <h1>Landing</h1>;
};
const EventNew = () => {
  return <h1>Event New</h1>;
};

//STYLE NOTE::
//add classname container to top level div for materialze to space+ pad+ resize

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/events" component={Dashboard} />
            <Route exact path="/events/new" component={EventNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//actions all passed as props to app component
export default connect(null, actions)(App);
