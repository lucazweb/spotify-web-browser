import React, { Component, Fragment } from 'react';
import { Router,  Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchActions from '../store/actions/search';
import createBrowserHistory from 'history/createBrowserHistory';
import LoginView from '../views/LoginView'
import Home from '../views/Home';
import Artist from '../views/Artist';
import Album from '../views/Album';
import Favorites from '../views/Favorites';
import api from '../services/api';

const history = createBrowserHistory();

class Wrapper extends Component {
    componentDidMount(){
      const params = this.getHashParams();
      const token = params.access_token;
      if(token !== null){
        //this.props.loginRequest(token);
        this.auth(token);
        this.isLogged();
      }
    };

    auth(token){
      if(token){
        try{
          api.get(`/me?access_token=${token}`)
            .then((res) => {
              sessionStorage.setItem('x-access-token', token);
              history.push('/home');
            });
        } catch(e){
          console.log(e);
        }
      }
    };

    isLogged(){
      if(sessionStorage.getItem('x-access-token') !== null){
        return true;
      }else {
        return false;
      }
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

    render (){
        return (
            <Router history={history}>
              <Fragment>
                <Route path='/' exact component={LoginView} />
                <Route path='/home' render={() => this.isLogged() ? <Home /> : <Redirect to='/' /> } />
                <Route path='/artist' component={Artist} />
                <Route path='/album' component={Album} />
                <Route path='/favorites' component={Favorites} />
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
