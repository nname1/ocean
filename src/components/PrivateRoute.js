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

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log(util.inspect(this.props,{depth:4}));
        console.log(util.inspect(this.state,{depth:4}));
        console.log(util.inspect(nextProps,{depth:4}));
        console.log(util.inspect(nextState,{depth:4}));
        if (this.props.location.pathname !== nextProps.location.pathname) {
            console.log("should update1");
            return true;
        }
        if (this.props.loggedInUser !== nextProps.loggedInUser) {
            console.log("should update3");
            return true;
        }
        if (this.state.isAuthenticated !== nextState.isAuthenticated) {
            console.log("should update2");
            return true;
        }
        return false;
    }*/
    componentWillReceiveProps(nextProps) {
        const newdata = nextProps.loggedInUser.toString()
        if (newdata !== "noname") {
            console.log("componentWillReceiveProps");
            this.setState({
                isAuthenticated:true
            })
        }
    }
    validateToken() {
        let it=this;
        httpUtil.isAuthorized().then((res) => {
            if(res){
                it.setState({isAuthenticated:true});
            }
            if (!it.state.isAuthenticated) {
                const {history} = it.props;
                history.push("/login");
            }
        }).catch((e) => {
            console.log(e)
            it.setState({isAuthenticated:false});
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
