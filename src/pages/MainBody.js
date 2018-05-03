import React, { Component } from 'react';
import {Layout} from 'antd';
import Sider from '../components/OceanSider';
import MainContent from '../components/MainContent';
class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Sider type={`/${this.props.match.params.type}`}/>
                <Layout style={{padding: '0 12px 12px'}}>
                    <MainContent match={this.props.match}/>
                </Layout>
            </Layout>
        )
    }
}

export default MainBody;
