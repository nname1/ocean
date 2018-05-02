import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import NaviLink from './NaviLink';
const { SubMenu } = Menu;
const { Sider } = Layout;
const util = require('util');

class OceanSider extends Component{
    constructor(props){
        super(props);
        this.getKey = this.getKey.bind(this);
    }

    getKey(url){if(url==""){return "nav1"}else{return url.substr(1)} }

    render(){
        return(<Sider width={200} style={{ background: '#fff' , height: '1000px'}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key={this.getKey(`${this.props.type}`)} title={<span><Icon type="user" /><NaviLink to={`${this.props.type}/subnav1`}>subnav 1</NaviLink></span>}>
                    <Menu.Item key="1"><NaviLink to={`${this.props.type}/subnav1/option1`}>option1</NaviLink></Menu.Item>
                    <Menu.Item key="2"><NaviLink to={`${this.props.type}/subnav1/option2`}>option2</NaviLink></Menu.Item>
                    <Menu.Item key="3"><NaviLink to={`${this.props.type}/subnav1/option3`}>option3</NaviLink></Menu.Item>
                    <Menu.Item key="4"><NaviLink to={`${this.props.type}/subnav1/option4`}>option4</NaviLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" /><NaviLink to={`${this.props.type}/subnav2`}>subnav 2</NaviLink></span>}>
                    <Menu.Item key="5"><NaviLink to={`${this.props.type}/subnav2/option5`}>option5</NaviLink></Menu.Item>
                    <Menu.Item key="6"><NaviLink to={`${this.props.type}/subnav2/option6`}>option6</NaviLink></Menu.Item>
                    <Menu.Item key="7"><NaviLink to={`${this.props.type}/subnav2/option7`}>option7</NaviLink></Menu.Item>
                    <Menu.Item key="8"><NaviLink to={`${this.props.type}/subnav2/option8`}>option8</NaviLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" /><NaviLink to={`${this.props.type}/subnav3`}>subnav 3</NaviLink></span>}>
                    <Menu.Item key="9"><NaviLink to={`${this.props.type}/subnav3/option9`}>option9</NaviLink></Menu.Item>
                    <Menu.Item key="10"><NaviLink to={`${this.props.type}/subnav3/option10`}>option10</NaviLink></Menu.Item>
                    <Menu.Item key="11"><NaviLink to={`${this.props.type}/subnav3/option11`}>option11</NaviLink></Menu.Item>
                    <Menu.Item key="12"><NaviLink to={`${this.props.type}/subnav3/option12`}>option12</NaviLink></Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>)
    }
}

export default OceanSider;