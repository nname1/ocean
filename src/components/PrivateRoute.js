import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Login from './Login';
import AppContainer from '../AppContainer';
import httpUtil from '../http/httpUtil';
import { connect } from 'react-redux';
const util = require('util');

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        const domain = window.location.protocol+"//"+window.location.hostname+":"+window.location.port;
        let short_url = window.location.href.replace(domain,"");
        this.state = {
            isAuthenticated: false,
            url: (short_url == "/login" || short_url == "/undefined") ? "/nav1" : short_url
        }
    }

    componentWillMount() {
        this.validateToken();
    }

    validateToken() {
        httpUtil.isAuthorized().then((res) => {
            if(res){
                this.setState({isAuthenticated:true});
            }
            if (!this.state.isAuthenticated) {
                const {history} = this.props;
                setTimeout(() => {
                    history.replace("/login");
                }, 1000)
            }
        }).catch((e) => {
            console.log(e)
            this.setState({isAuthenticated:false});
        })
    }

    render() {
        console.log(this.state.isAuthenticated);
        return this.state.isAuthenticated ?
            (<AppContainer loggedInUser={this.props.loggedInUser}/>) : (<Login url={this.state.url} setLoggedInUser={this.props.setLoggedInUser}/>)
    }
}

//export default withRouter(PrivateRoute);

function mapStateToProps(state) {
    console.log("PrivateRoute state is "+util.inspect(state,{depth:4}));
    return ({
        loggedInUser:state.user.loggedInUser
    })
}

function mapDispatchToProps(dispatch,ownProps) {
    return ({
            setLoggedInUser:(username)=>dispatch({type:"loggedIn",text:username})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateRoute));
