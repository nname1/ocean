import React, {Component} from 'react';
import './App.css';
import Header from './components/OceanHeader';
import { Route,Redirect } from 'react-router-dom'
import MainBody from './pages/MainBody';
import IndexPage from './pages/IndexPage'
import { Layout } from 'antd';
//import store from './store/store'
//import {Provider} from 'react-redux';

class AppContainer extends Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Layout>
                    <Route path="/" exact component={IndexPage}/>
                    <Route path="/:type" exact component={MainBody}/>
                    <Route path="/:type/:subnav" exact component={MainBody}/>
                    <Route path="/:type/:subnav/:option" exact component={MainBody}/>
                </Layout>
            </Layout>
        );
    }
}

export default AppContainer;