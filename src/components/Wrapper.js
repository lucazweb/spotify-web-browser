import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router,  Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import LoginView from '../views/LoginView'
import Home from '../views/Home';
import api from '../services/api';
class Wrapper extends Component {

    componentDidMount(){
      const params = this.getHashParams();
      const token = params.access_token;
      this.props.loginRequest(token);
      this.signInAuthorized();

    };

    auth(){
      api.get(`/me`, {
        headers: new Headers({
          Authorization: `Bearer ${this.state.token}`,
        }),        
      }).then((res) => {
        console.log(res);
      })
    };

    getHashParams = () => {
      const hashParams = {};
      let e;
      const r = /([^&;=]+)=?([^&;]*)/g;
      const q = window.location.hash.substring(1);
      e = r.exec(q);
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      return hashParams;
    };

    signInAuthorized = () => {
      console.log('Autorizado');

     return (<Redirect to='/home' />);
    }

    render (){
        return (
            <Router>
              <Fragment>
                <Route path='/' exact component={LoginView} />
                <Route path='/home' component={Home} />
              </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
