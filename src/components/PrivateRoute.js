import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
        let redirect_url = window.location.href.split('?state=')[0];
        let state = window.location.href.split('?state=')[1];
        httpUtil.isAuthorized(state).then((res) => {
            console.log(JSON.stringify(res));
            if(res.data){
                it.setState({isAuthenticated:true});
                this.props.setLoggedInUser({userName:res.headers['username'],
                    Authorization:res.headers['authorization']});
            }
            if (!it.state.isAuthenticated) {
                window.location.assign('http://localhost:3001/login?redirect_url='+redirect_url+'?state='+res.headers['state']);
            }
        }).catch((e) => {
            console.log(e)
            it.setState({isAuthenticated:false});
        })
    }

    render() {
        /*console.log(this.state.isAuthenticated);
        return this.state.isAuthenticated ?
            (<AppContainer loggedInUser={this.props.loggedInUser}/>) : (<Login url={this.state.url} setLoggedInUser={this.props.setLoggedInUser}/>);*/
        return (<AppContainer loggedInUser={this.props.loggedInUser}/>);
    }
}
//window.location.assign('http://localhost:3000/login?redirect_to='+window.location.href)
//export default withRouter(PrivateRoute);

function mapStateToProps(state) {
    console.log("PrivateRoute state is "+util.inspect(state,{depth:4}));
    return ({
        loggedInUser:state.user.loggedInUser,
        userToken:state.user.userToken
    })
}

function mapDispatchToProps(dispatch,ownProps) {
    return ({
            setLoggedInUser:(userToken)=>dispatch({type:"loggedIn",text:userToken})
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
