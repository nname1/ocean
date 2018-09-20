import React, {Component} from 'react';
import './App.css';
import Header from './components/OceanHeader';
import {Route, Switch} from 'react-router-dom';
import MainBody from './pages/MainBody';
import IndexPage from './pages/IndexPage';
import {Layout} from 'antd';
import Login from './components/Login';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route path="/login"  exact component={Login}/>
                <Layout>
                    <Header loggedInUser={this.props.loggedInUser}/>
                    <Layout>
                        <Route path="/" exact component={IndexPage}/>
                        <Route path="/:type" exact component={MainBody}/>
                        <Route path="/:type/:subnav" exact component={MainBody}/>
                        <Route path="/:type/:subnav/:option" exact component={MainBody}/>
                    </Layout>
                </Layout>
            </Switch>
        );
    }
}

export default AppContainer;