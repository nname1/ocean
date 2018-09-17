import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Login from './Login';
import AppContainer from '../AppContainer'
class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        const domain = window.location.protocol+"//"+window.location.hostname+":"+window.location.port;
        this.state = {
            isAuthenticated: window.sessionStorage.getItem("userId") ? true: false,
            url:(window.location.href==domain+"/login" || window.location.href==domain+"/undefined")?domain:window.location.href
        }
    }

    componentWillMount() {
        if(!this.state.isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }

    render() {
        return  this.state.isAuthenticated ?
            (<AppContainer/>) : (<Login url={this.state.url}/>)
    }
}

export default withRouter(PrivateRoute);