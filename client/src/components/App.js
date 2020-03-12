import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

const Dashboard = () => <h2>DASHBOARD</h2>;
const SurveyNew = () => <h2>SURVEYNEW</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path='/' component={Landing} exact />
          <Route path='/surveys' component={Dashboard} exact />
          <Route path='/surveys/new' component={SurveyNew} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
