import NaviLink from './NaviLink';
import React, { Component } from 'react';
import logo from '../sources/logo.svg';
import { Layout,Menu,Icon} from 'antd';
import '../css/user.css';
const { Header} = Layout;

class OceanHeader extends Component{
    render(){
        return(<Header className="header">
            <div className="logo" ><img src={logo} className="App-logo" alt="logo" /></div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px', float:'left', paddingLeft: '100px' }}
            >
                <Menu.Item key="1"><NaviLink to='/nav1'>nav 1</NaviLink></Menu.Item>
                <Menu.Item key="2"><NaviLink to='/nav2'>nav 2</NaviLink></Menu.Item>
                <Menu.Item key="3"><NaviLink to='/nav3'>nav 3</NaviLink></Menu.Item>
            </Menu>
            <NaviLink to='/profile/user' className="userInfoLink"><Icon type="user" theme="outlined" className="userInfo">{this.props.loggedInUser}</Icon></NaviLink>
        </Header>)
    }
}

export default OceanHeader;